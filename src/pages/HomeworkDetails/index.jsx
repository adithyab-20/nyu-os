import { useParams } from 'react-router-dom';
import { homeworkData } from './data'
import { Hero, Concepts, Requirements } from '../../components';
import { BackButton, MethodCard, FAQ } from './components';

const HomeworkDetails = () => {
  const { id } = useParams();
  const homework = homeworkData[id];

  if (!homework) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900">
          Homework not found
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <BackButton to="/homework" />
      
      <Hero 
        title={homework.title}
        subtitle={homework.subtitle}
      />

      <div className="bg-white rounded-xl p-10 shadow-sm">
        <Concepts concepts={homework.concepts} />
        
        <p className="text-gray-600 mb-8">
          <strong className="text-gray-900">Objective:</strong> {homework.objective}
        </p>
        
        {homework.methods && (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Implementation Methods
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {homework.methods.map((method, index) => (
                <MethodCard key={index} {...method} />
              ))}
            </div>
          </>
        )}

        <Requirements {...homework.requirements} />
        
        <FAQ items={homework.faq} />
      </div>
    </div>
  );
};

export default HomeworkDetails; 