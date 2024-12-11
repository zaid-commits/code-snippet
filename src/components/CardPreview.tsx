import React, { useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import html2canvas from 'html2canvas';

interface CardPreviewProps {
  code: string;
  language: string;
  theme: string;
  font: string;
  gradient: string;
}

const CardPreview: React.FC<CardPreviewProps> = ({ code, language, theme, font, gradient }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [caption, setCaption] = useState('');
  const [watermark, setWatermark] = useState('');

  React.useEffect(() => {
    Prism.highlightAll();
  }, [code, language, theme]);

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
        className={`p-6 rounded-lg ${gradient}`}
        style={{ fontFamily: font }}
      >
        {caption && <div className="text-white text-lg font-semibold mb-2">{caption}</div>}
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <pre className="relative">
            <code className={`language-${language}`}>{code}</code>
            {watermark && (
              <div className="absolute bottom-2 right-2 text-gray-400 opacity-50">
                {watermark}
              </div>
            )}
          </pre>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <input
          type="text"
          placeholder="Add caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Add watermark"
          value={watermark}
          onChange={(e) => setWatermark(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={downloadCard}
          className="w-full bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Download Card
        </button>
      </div>
    </div>
  );
};

export default CardPreview;

