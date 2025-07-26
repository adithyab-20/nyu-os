import { MarkdownContent } from '@/components';

const CourseInfo = () => {
  return (
    <div className="bg-white rounded-xl p-10 shadow-sm mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-slate-500">
        Course Overview
      </h2>
      <MarkdownContent file="course-info" />
    </div>
  );
};

export default CourseInfo; 