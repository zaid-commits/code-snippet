import React, { useState } from 'react';
import CodeInput from './components/CodeInput';
import CardPreview from './components/CardPreview';
import { generateExplanation } from './utils/api.ts';
import ExplanationPanel from './components/ExplainationPanel.tsx';

const App: React.FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [theme] = useState('dark');
  const [explanation, setExplanation] = useState('');

  const handleExplain = async () => {
    const result = await generateExplanation(code, language);
    setExplanation(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6 text-center">Code Card Creator</h1>
            <CodeInput
              code={code}
              setCode={setCode}
              language={language}
              setLanguage={setLanguage}
            />
            <CardPreview code={code} language={language} theme={theme} />
            <div className="mt-4">
              <button
                onClick={handleExplain}
                className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Explain Code
              </button>
            </div>
            <ExplanationPanel explanation={explanation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
