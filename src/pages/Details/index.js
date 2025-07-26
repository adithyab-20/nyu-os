import { useParams } from 'react-router-dom';
import { Hero, MarkdownContent } from '@/components';
import { BackButton, FAQ } from './components';

const Details = ({ list, faqs, nav }) => {
  const { id } = useParams();
  const faqItems = faqs[id] || [];

  return (
    <div className="container mx-auto px-4 py-12">
      <BackButton nav={nav} />

      <div className="mt-12">
        <Hero 
          title={list[id].title}
          subtitle={list[id].description}
        />
      </div>

      <div className="mx-auto max-w-3xl">
        <MarkdownContent file={id} />
      </div>

      {faqItems && faqItems.length > 0 && (
        <div className="p-10 mx-auto max-w-3xl">
          <FAQ items={faqItems} />
        </div>
      )}
    </div>
  );
};

export default Details; 