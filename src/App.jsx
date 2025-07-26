import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, List, Details } from './pages';
import { homeworkList, installationList, homeworkFaqs } from '@/data';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homework" element={<List list={homeworkList} nav="homework" />} />
          <Route path="/homework/:id" element={<Details list={homeworkList} faqs={homeworkFaqs} nav="homework" />} />
          <Route path="/installations" element={<List list={installationList} nav="installations" />} />
          <Route path="/installations/:id" element={<Details list={installationList} faqs={{}} nav="installations" />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
