import React from 'react';
import { generateDiagram } from '../utils/api';

interface CodeVisualizationProps {
  code: string;
  language: string;
}

const CodeVisualization: React.FC<CodeVisualizationProps> = ({ code, language }) => {
  const [diagram, setDiagram] = React.useState('');

  React.useEffect(() => {
    const fetchDiagram = async () => {
      try {
        const diagramData = await generateDiagram(code, language);
        setDiagram(diagramData);
      } catch (error) {
        console.error('Error fetching diagram:', error);
      }
    };

    fetchDiagram();
  }, [code, language]);

  if (!diagram) {
    return null;
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Code Visualization</h3>
      <div dangerouslySetInnerHTML={{ __html: diagram }} />
    </div>
  );
};

export default CodeVisualization;