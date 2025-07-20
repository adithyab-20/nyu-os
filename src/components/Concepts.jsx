const Concepts = ({ concepts }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-purple-800 p-6 rounded-r-xl mb-8">
      <h3 className="text-xl font-bold text-purple-800 mb-4">
        Key Concepts You'll Learn
      </h3>
      <p className="text-gray-600">
        {concepts}
      </p>
    </div>
  );
};

export default Concepts; 