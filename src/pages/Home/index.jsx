import { Hero } from '../../components';
import { ProfessorInfo, CourseInfo } from './components';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Hero 
        title="Operating Systems"
        subtitle="A comprehensive introduction to operating system principles, design, and implementation"
      />
      <ProfessorInfo />
      <CourseInfo />
    </div>
  );
};

export default Home; 