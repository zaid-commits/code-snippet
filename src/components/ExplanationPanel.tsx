import React from 'react';

interface ExplanationPanelProps {
  explanation: string;
  translation: string;
  summary: string;
  bestPractices: string;
}

const ExplanationPanel: React.FC<ExplanationPanelProps> = ({
  explanation,
  translation,
  summary,
  bestPractices,
}) => {
  return (
    <div className="mt-6 space-y-4">
      {explanation && (
        <div>
          <h3 className="text-lg font-semibold">Explanation:</h3>
          <div className="p-4 bg-gray-100 rounded-md">{explanation}</div>
        </div>
      )}
      {translation && (
        <div>
          <h3 className="text-lg font-semibold">Translation:</h3>
          <div className="p-4 bg-gray-100 rounded-md">{translation}</div>
        </div>
      )}
      {summary && (
        <div>
          <h3 className="text-lg font-semibold">Summary:</h3>
          <div className="p-4 bg-gray-100 rounded-md">{summary}</div>
        </div>
      )}
      {bestPractices && (
        <div>
          <h3 className="text-lg font-semibold">Best Practices:</h3>
          <div className="p-4 bg-gray-100 rounded-md">{bestPractices}</div>
        </div>
      )}
    </div>
  );
};

export default ExplanationPanel;

