import React from 'react';

import './App.css';
import { useNavigate, useParams } from 'react-router-dom';

import SaveIcon from './save.jpg';

function encode(data: string) {
  return window.btoa(data);
}

function decode(data: string) {
  return window.atob(data);
}

function compress(data: string) {
  return data;
}

function decompress(data: string) {
  return data;
}
type AppSchema = {
  title: string;
  content: string;
};

function App() {

  const [title, setTitle] = React.useState<string>('');
  const [content, setContent] = React.useState<string>('');
  const [gitCommit, setGitCommit] = React.useState<string>('');
  const [gitUrl, setGitUrl] = React.useState<string>('');

  const { hash } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch('https://api.github.com/repos/ayushmanchhabra/sharelist.xyz/commits?per_page=1')
      .then(res => res.json())
      .then(json => {
        setGitUrl(json[0].html_url)
        setGitCommit(json[0].sha)
      });
    ;
  }, []);

  React.useEffect(function () {
    if (hash !== undefined) {
      const decoded = decode(hash);
      const decompressed = decompress(decoded);
      const newState: AppSchema = JSON.parse(decompressed);
      setTitle(newState.title);
      setContent(newState.content);
    }
  }, [hash]);

  const handleTitleChange = React.useCallback(function (event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }, []);

  const handleContentChange = React.useCallback(function (event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }, []);

  const handleSaveAction = React.useCallback(function (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      const encoded = save({ title, content })
      navigate('/' + encoded);
    }
  }, [navigate, title, content]);

  function save(data: AppSchema): string {
    const stateString = JSON.stringify(data);
    const compressed = compress(stateString);
    const encoded = encode(compressed);
    return encoded;
  }

  return (
    <>
      <input
        className='w-full'
        onChange={handleTitleChange}
        onKeyDown={handleSaveAction}
        placeholder='Share List'
        value={title}
      />
      <textarea
        className='h-5/6 w-full'
        data-testid='textarea'
        onChange={handleContentChange}
        onKeyDown={handleSaveAction}
        placeholder='Share arbitrary information without an intermediatary such as database. Type something, press Ctrl+S, copy URL and share to someone.'
        value={content}
      />
      <span className='flex items-center justify-center'>
        <a href="https://github.com/ayushmanchhabra/sharelist.xyz" rel="noopener noreferrer" target="_blank">About</a> |
        <a href={gitUrl} rel="noopener noreferrer" target="_blank">{gitCommit.slice(0, 7)}</a> |
        <a href="https://ayushmanchhabra.com" rel="noopener noreferrer" target="_blank">(c) Ayushman Chhabra</a>
      </span>
      <img
        alt="Save Icon"
        height={50}
        onClick={() => {
          const encoded = save({ title, content })
          navigate('/' + encoded);
        }
        }
        src={SaveIcon}
        width={50}
      />
    </>
  )
}

export default App
