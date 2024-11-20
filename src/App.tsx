import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import DynamicForm from './components/DynamicForm';

const App = () => {
  const [schema, setSchema] = useState<any>(null);

  return (
    <div className="flex h-screen">
      {/* Left Side: JSON Editor */}
      <div className="w-full md:w-1/2 p-4 border-r border-gray-300 bg-white">
        <h2 className="text-lg font-bold mb-4">JSON Editor</h2>
        <JsonEditor onChange={setSchema} />
      </div>

      {/* Right Side: Form Preview */}
      <div className="w-full md:w-1/2 p-4 bg-white">
        <h2 className="text-lg font-bold mb-7">Form Genrator</h2>
        <DynamicForm schema={schema} />
      </div>
    </div>
  );
};

export default App;


