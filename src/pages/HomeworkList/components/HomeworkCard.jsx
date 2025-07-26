import { Link } from 'react-router-dom';

const HomeworkCard = ({ number, title, description }) => {
  return (
    <Link 
      to={`/homework/hw${number}`}
      className="block bg-white rounded-xl p-8 shadow-sm border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1 flex flex-row items-start"
    >
      <div className="inline-block px-4 py-2 rounded-lg bg-slate-600 text-white text-sm font-semibold mr-6 flex-shrink-0">
        HW {number}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default HomeworkCard; 