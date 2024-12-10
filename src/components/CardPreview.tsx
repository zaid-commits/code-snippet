import React, { useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import html2canvas from 'html2canvas';

interface CardPreviewProps {
  code: string;
  language: string;
  theme: string;
}

const CardPreview: React.FC<CardPreviewProps> = ({ code, language, theme }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const downloadCard = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const link = document.createElement('a');
      link.download = 'code-card.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className="mt-4">
      <div
        ref={cardRef}
        className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}
      >
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
      <button
        onClick={downloadCard}
        className="mt-2 w-full bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Download Card
      </button>
    </div>
  );
};

export default CardPreview;

