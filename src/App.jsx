import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, MarkdownContent } from './components';
import { Home, HomeworkList, HomeworkDetails } from './pages';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homework" element={<HomeworkList />} />
          <Route path="/homework/:id" element={<HomeworkDetails />} />
          <Route path="/content" element={<MarkdownContent file="sample" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
