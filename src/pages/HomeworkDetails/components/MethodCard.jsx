const MethodCard = ({ title, description, pros, cons }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h4 className="text-lg font-bold mb-4">
        {title}
      </h4>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <div className="space-y-2">
        <div className="text-green-800">
          <strong>Pros:</strong> {pros}
        </div>
        <div className="text-red-800">
          <strong>Cons:</strong> {cons}
        </div>
      </div>
    </div>
  );
};

export default MethodCard; 