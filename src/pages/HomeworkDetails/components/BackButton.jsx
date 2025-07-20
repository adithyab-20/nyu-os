import { Link } from 'react-router-dom';

const BackButton = ({ to }) => {
  return (
    <Link 
      to={to}
      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-500 text-white font-medium rounded-lg transition-colors hover:bg-slate-700 mb-8"
    >
      <span>←</span>
      <span>Back to Assignments</span>
    </Link>
  );
};

export default BackButton; 