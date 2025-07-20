const ProfessorInfo = () => {
  return (
    <div className="bg-white rounded-xl p-10 shadow-sm">
      <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
        <div className="w-32 h-32 rounded-full bg-slate-500 flex items-center justify-center text-4xl font-bold text-white mx-auto md:mx-0">
          CS
        </div>
        <div className="md:text-left text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Professor Yotov
          </h2>
          <p className="font-semibold text-gray-700 mb-4">
            Professor of Computer Science
          </p>
          <div className="text-gray-700">
            <p className="mb-1">
              <strong>Office Hours:</strong> Tuesdays & Thursdays, 2:00-4:00 PM
            </p>
            <p className="mb-1">
              <strong>Email:</strong> kamen@yotov.org
            </p>
            <p>
              <strong>Office:</strong> Warren Weaver Hall, Room 415
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorInfo; 