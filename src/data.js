export const homeworkList = {
    hw0: {
        number: 0,
        title: 'Development Environment Setup',
        description: 'Set up your development environment using either GitHub Codespaces or Docker. Learn essential command-line tools and version control basics.',
    },
    hw1: {
        number: 1,
        title: 'Implement Tail Command',
        description: 'Create a C implementation of the Unix tail command with support for multiple files and command-line options.',
    }
}

export const homeworkFaqs = {
    hw0: [
        {
            question: 'Q: Which method should I choose?',
            answer: 'A: If you\'re new to development environments or want the quickest setup, start with Codespaces. If you prefer working offline or want more control over your environment, use Docker.'
        },
        {
            question: 'Q: Can I switch methods later in the course?',
            answer: 'A: Yes, both methods use the same underlying Linux environment, so your code will work in either setup. You can switch at any time.'
        },
        {
            question: 'Q: What if I encounter issues during setup?',
            answer: 'A: Check the troubleshooting guide in the assignment repository, post questions on the course forum, or attend office hours for personalized help.'
        },
        {
            question: 'Q: Do I need prior experience with Linux?',
            answer: 'A: No prior Linux experience is required. We\'ll cover essential command-line skills as part of this assignment.'
        }
    ],
    hw1: [
        {
            question: 'Q: How should I handle very large files that don\'t fit in memory?',
            answer: 'A: Avoid loading entire files into memory. Consider reading from the end of the file backwards, or use a sliding window approach with a circular buffer to track the last N lines.'
        },
        {
            question: 'Q: What if a file has fewer lines than requested?',
            answer: 'A: Display all available lines, just like the real tail command does. Your program should not produce an error in this case.'
        },
        {
            question: 'Q: How should I test my implementation?',
            answer: 'A: Compare your output with the real tail command using various test files and edge cases. We provide a comprehensive test suite in the assignment repository with automated testing scripts.'
        },
        {
            question: 'Q: Can I use standard C library functions like fgets() and fopen()?',
            answer: 'A: Yes, you can use standard C library functions. However, make sure you understand how they work at the system call level, as this knowledge will be important for future assignments.'
        }
    ]
};
