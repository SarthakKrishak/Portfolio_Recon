import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <p>Window Controls</p>
        <p>Tech Stack</p>
      </div>

      <div id="techstack">
        <p>
          <span className="font-bold">@sarthak % </span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
        </ul>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
