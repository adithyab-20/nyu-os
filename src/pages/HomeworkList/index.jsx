import { Hero } from '../../components';
import { homeworkData } from './data';
import { HomeworkCard } from './components';

const HomeworkList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
        <Hero 
            title="Homework Assignments"
            subtitle="Click on any assignment to view detailed instructions and requirements"
        />

        <div className="grid md:grid-cols-1 gap-8">
            {homeworkData.map((homework) => (
                <HomeworkCard
                key={homework.number}
                {...homework}
                />
            ))}
        </div>
    </div>
  );
};

export default HomeworkList; 