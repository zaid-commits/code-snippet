import React, { useState } from 'react';
import CodeInput from './components/CodeInput';
import CardPreview from './components/CardPreview';
import ExplanationPanel from './components/ExplanationPanel';
import StyleCustomizer from './components/StyleCustomizer';
import CodeVisualization from './components/CodeVisualization';
import { generateExplanation, translateCode, summarizeCode, checkBestPractices } from './utils/api';
import AIEnhancements from './components/AiEnhancements';
import HelloWorld from './components/HelloWorld';

const App: React.FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('dracula');
  const [font, setFont] = useState('Fira Code');
  const [gradient, setGradient] = useState('bg-gradient-to-r from-purple-400 via-pink-500 to-red-500');
  const [explanation, setExplanation] = useState('');
  const [translation, setTranslation] = useState('');
  const [summary, setSummary] = useState('');
  const [bestPractices, setBestPractices] = useState('');

  const handleExplain = async () => {
    const result = await generateExplanation(code, language);
    setExplanation(result);
  };

  const handleTranslate = async (targetLanguage: string) => {
    const result = await translateCode(code, language, targetLanguage);
    setTranslation(result);
  };

  const handleSummarize = async () => {
    const result = await summarizeCode(code, language);
    setSummary(result);
  };

  const handleBestPractices = async () => {
    const result = await checkBestPractices(code, language);
    setBestPractices(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <HelloWorld />
      <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
        <div className={`absolute inset-0 ${gradient} shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl`}></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6 text-center">Advanced Code Card Creator</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CodeInput
                  code={code}
                  setCode={setCode}
                  language={language}
                  setLanguage={setLanguage}
                />
                <StyleCustomizer
                  theme={theme}
                  setTheme={setTheme}
                  font={font}
                  setFont={setFont}
                  gradient={gradient}
                  setGradient={setGradient}
                />
              </div>
              <div>
                <CardPreview
                  code={code}
                  language={language}
                  theme={theme}
                  font={font}
                  gradient={gradient}
                />
              </div>
            </div>
            <CodeVisualization code={code} language={language} />
            <AIEnhancements
              onExplain={handleExplain}
              onTranslate={handleTranslate}
              onSummarize={handleSummarize}
              onBestPractices={handleBestPractices}
            />
            <ExplanationPanel
              explanation={explanation}
              translation={translation}
              summary={summary}
              bestPractices={bestPractices}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

