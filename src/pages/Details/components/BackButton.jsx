import { Link } from 'react-router-dom';

const BackButton = ({ nav }) => {

  let link = '';
  let text = '';

  if (nav === 'homework') {
    link = '/homework';
    text = 'Assignments';
  } else if (nav === 'installation') {
    link = '/installation';
    text = 'Installation';
  } else if (nav === 'xv6-dev-resources') {
    link = '/';
    text = 'Home';
  }

  return (
    <Link 
      to={link}
      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-500 text-white font-medium rounded-lg transition-colors hover:bg-slate-700 mb-8"
    >
      <span>←</span>
      <span>Back to {text}</span>
    </Link>
  );
};

export default BackButton; 