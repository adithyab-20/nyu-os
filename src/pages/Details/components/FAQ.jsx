import { useState } from 'react';

const FAQ = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Frequently Asked Questions
      </h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
            >
              <span className="font-medium text-gray-900">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                  expandedItems.has(index) ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedItems.has(index) && (
              <div className="px-6 py-4 bg-white border-t border-gray-100">
                <div className="text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 