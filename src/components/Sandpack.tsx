import './Sandpack.scss';
import React, { useEffect, useState } from 'react';
import { SandpackProvider, SandpackLayout, SandpackPreview, SandpackCodeEditor } from '@codesandbox/sandpack-react';
import { sandpackDark } from "@codesandbox/sandpack-themes";

export default function Sandpack({ files }: { files: any; }) {

  return (
    <div data-component="SandpackPage" style={{ height: "90vh" }}>
      <SandpackProvider
        key={files} // Adding a key to force re-render on content change
        template="nextjs"
        theme={sandpackDark}
        files={files}
      >
        <SandpackLayout style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ flex: 3, height: '75%' }}>
            <SandpackPreview style={{ height: '55vh' }} />
          </div>
          <div style={{ display: 'flex', height: '25%', overflow: "auto" }}>
            <SandpackCodeEditor />
          </div>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
