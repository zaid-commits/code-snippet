import React from 'react';

interface ExplanationPanelProps {
  explanation: string;
}

const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ explanation }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Explanation:</h2>
      <div className="p-4 bg-gray-100 rounded-md">
        {explanation ? explanation : 'Click "Explain Code" to get an explanation.'}
      </div>
    </div>
  );
};

export default ExplanationPanel;

