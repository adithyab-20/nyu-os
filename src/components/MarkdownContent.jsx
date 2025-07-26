import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownContent = ({ file }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/content/${file}.md`)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(err => console.error('Error loading markdown:', err));
  }, [file]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose prose-lg max-w-none bg-white rounded-xl p-10 shadow-sm">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownContent; 