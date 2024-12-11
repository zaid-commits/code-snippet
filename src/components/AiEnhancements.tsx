import React, { useState } from 'react';

interface AIEnhancementsProps {
  onExplain: () => void;
  onTranslate: (targetLanguage: string) => void;
  onSummarize: () => void;
  onBestPractices: () => void;
}

const AIEnhancements: React.FC<AIEnhancementsProps> = ({
  onExplain,
  onTranslate,
  onSummarize,
  onBestPractices,
}) => {
  const [targetLanguage, setTargetLanguage] = useState('python');

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-lg font-semibold">AI Enhancements</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={onExplain}
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Explain Code
        </button>
        <div className="flex items-center">
          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="mr-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
          </select>
          <button
            onClick={() => onTranslate(targetLanguage)}
            className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Translate
          </button>
        </div>
        <button
          onClick={onSummarize}
          className="bg-yellow-500 text-white rounded-md px-4 py-2 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        >
          Summarize
        </button>
        <button
          onClick={onBestPractices}
          className="bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Check Best Practices
        </button>
      </div>
    </div>
  );
};

export default AIEnhancements;
