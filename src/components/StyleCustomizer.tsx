import React from 'react';

interface StyleCustomizerProps {
  theme: string;
  setTheme: (theme: string) => void;
  font: string;
  setFont: (font: string) => void;
  gradient: string;
  setGradient: (gradient: string) => void;
}

const StyleCustomizer: React.FC<StyleCustomizerProps> = ({
  theme,
  setTheme,
  font,
  setFont,
  gradient,
  setGradient,
}) => {
  return (
    <div className="mt-4 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="dracula">Dracula</option>
          <option value="solarized">Solarized</option>
          <option value="monokai">Monokai</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Font</label>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="Fira Code">Fira Code</option>
          <option value="JetBrains Mono">JetBrains Mono</option>
          <option value="Source Code Pro">Source Code Pro</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gradient</label>
        <select
          value={gradient}
          onChange={(e) => setGradient(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Purple to Red</option>
          <option value="bg-gradient-to-r from-green-400 to-blue-500">Green to Blue</option>
          <option value="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">Sunset</option>
        </select>
      </div>
    </div>
  );
};

export default StyleCustomizer;

