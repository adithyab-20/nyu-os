const Requirements = ({ title, items }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requirements; 