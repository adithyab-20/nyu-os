import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, List, Details } from './pages';
import { homeworkList, installationList, xv6DevResourcesList, homeworkFaqs, xv6DevResourcesFaqs } from '@/data';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homework" element={<List list={homeworkList} nav="homework" />} />
          <Route path="/homework/:id" element={<Details list={homeworkList} faqs={homeworkFaqs} nav="homework" />} />
          <Route path="/installation" element={<List list={installationList} nav="installation" />} />
          <Route path="/installation/:id" element={<Details list={installationList} faqs={{}} nav="installation" />} />
          <Route path="/xv6-dev-resources" element={<Details list={xv6DevResourcesList} faqs={xv6DevResourcesFaqs} nav="xv6-dev-resources" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
