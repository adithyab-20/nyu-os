import { useParams } from 'react-router-dom';
import { homeworkFaqs, homeworkList } from '@/data';
import { Hero, MarkdownContent } from '@/components';
import { BackButton, FAQ } from './components';

const HomeworkDetails = () => {
  const { id } = useParams();
  const faqs = homeworkFaqs[id];

  return (
    <div className="container mx-auto px-4 py-12">
      <BackButton to="/homework" />

      <div className="mt-12">
        <Hero 
          title={homeworkList[id].title}
          subtitle={homeworkList[id].description}
        />
      </div>

      <div className="mx-auto max-w-3xl">
        <MarkdownContent file={id} />
      </div>

      <div className="p-10 mx-auto max-w-3xl">
        <FAQ items={faqs} />
      </div>
    </div>
  );
};

export default HomeworkDetails; 