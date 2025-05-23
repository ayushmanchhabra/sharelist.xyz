import { StyledEngineProvider } from "@mui/material";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Zettel from './Zettel';

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route
            element={<Zettel />}
            path='/'
          />
          <Route
            element={<Zettel />}
            path='/:hash'
          />
        </Routes>
      </Router>
    </StyledEngineProvider>
  );
}
