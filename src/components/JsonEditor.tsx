import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const JsonEditor = ({ onChange }: { onChange: (schema: any) => void }) => {
  const [error, setError] = useState<string | null>(null);

  const handleEditorChange = (value: string | undefined) => {
    try {
      if (value) {
        const parsed = JSON.parse(value);
        setError(null);
        onChange(parsed);
      }
    } catch {
      setError('Invalid JSON');
    }
  };

  return (
    <div className='flex flex-wrap justify-center'>
      <Editor
      
        height="80vh"
        defaultLanguage="json"
        theme="vs-dark"
        defaultValue=""
        onChange={handleEditorChange}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JsonEditor;

