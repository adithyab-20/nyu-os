const CourseInfo = () => {
  return (
    <div className="bg-white rounded-xl p-10 shadow-sm mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-slate-500">
        Course Overview
      </h2>
      <p className="text-gray-600 mb-8">
        This course provides a comprehensive introduction to operating systems concepts and implementation. 
        Students will learn about process management, memory management, file systems, synchronization, 
        and distributed systems through both theoretical study and hands-on programming assignments.
      </p>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Learning Objectives
      </h3>
      <p className="text-gray-600 mb-4">By the end of this course, students will be able to:</p>
      <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
        <li>Understand fundamental operating system concepts and design principles</li>
        <li>Implement basic system calls and kernel modules</li>
        <li>Analyze and solve synchronization problems</li>
        <li>Design and implement file system components</li>
        <li>Evaluate system performance and optimization strategies</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Prerequisites
      </h3>
      <p className="text-gray-600">
        Computer Systems Organization, Data Structures, and proficiency in C programming language.
      </p>
    </div>
  );
};

export default CourseInfo; 