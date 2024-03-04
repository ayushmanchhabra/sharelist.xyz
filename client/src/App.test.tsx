import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect } from "vitest";

import App from "./App";

import { TITLE } from "./App.content";

describe("App", () => {

  /**
   * Saves reference to unmount function call.
   * 
   * @function
   * 
   * @returns {void}
   */
  let unmountApp: () => void = () => {
    // initially empty
  };

  beforeEach(() => {
    const { unmount } = render(
        <App />
    );

    unmountApp = unmount;
  });

  it("renders title", () => {
    expect(screen.getByTestId("app-title").textContent).toBe(TITLE);
  });

  afterEach(() => {
    unmountApp();
  });
});
