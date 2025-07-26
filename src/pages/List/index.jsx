import { Hero } from '@/components';
import Card from './components';

const List = ({ list, nav }) => {
  return (
    <div className="container mx-auto px-4 py-12">
        <Hero 
            title={nav === 'homework' ? 'Homework Assignments' : 'Installations'}
            subtitle={nav === 'homework' ? 'Click on any assignment to view detailed instructions and requirements' : 'Click on any installation to view detailed instructions and requirements'}
        />

        <div className="grid md:grid-cols-1 gap-8">
            {Object.values(list).map((item) => (
                <Card
                  key={item.number}
                  nav={nav}
                  {...item}
                />
            ))}
        </div>
    </div>
  );
};

export default List; 