export const homeworkData = {
    hw0: {
    title: 'Development Environment Setup',
    subtitle: 'Setting up your development environment for the course',
    concepts: 'Linux command line navigation, development environments, version control with Git, virtualization concepts, containerization with Docker, compilation and debugging tools',
    objective: 'Set up your development environment for the course assignments. This will ensure you have all necessary tools and can compile and run C programs in a Unix-like environment. You\'ll also learn fundamental command-line skills essential for systems programming.',
    methods: [
        {
        title: 'Method 1: GitHub Codespaces',
        description: 'Use GitHub\'s cloud-based development environment. This option provides a pre-configured Ubuntu environment accessible from any device with a web browser.',
        pros: 'No local setup required, consistent environment across devices, pre-installed tools',
        cons: 'Requires internet connection, limited free hours per month'
        },
        {
        title: 'Method 2: Docker',
        description: 'Run a containerized Linux environment on your local machine. This provides complete isolation and reproducibility while running on your own hardware.',
        pros: 'Works offline, full control over environment, no usage limits',
        cons: 'Requires Docker installation, more initial setup complexity'
        }
    ],
    requirements: {
        title: 'Setup Requirements',
        items: [
        'Access to a Unix-like environment (Ubuntu 20.04+ recommended)',
        'GCC compiler and build tools',
        'Git version control system',
        'Text editor or IDE (VS Code, vim, or emacs)',
        'Basic familiarity with terminal/command line'
        ]
    },
    faq: [
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
    ]
    },
    hw1: {
    title: 'Implement Tail Command',
    subtitle: 'Creating a C implementation of the Unix tail utility',
    concepts: 'File I/O operations, system calls (open, read, lseek), command-line argument parsing, buffer management, memory allocation, Unix utilities architecture, error handling',
    objective: 'Implement a simplified but functional version of the Unix tail command in C. Your implementation should efficiently read the last N lines of one or more files and handle various edge cases that real-world utilities must address.',
    requirements: {
        title: 'Implementation Requirements',
        items: [
        'Support the -n flag to specify number of lines to display (default: 10)',
        'Handle multiple files as command-line arguments',
        'Read from standard input when no file is specified',
        'Display appropriate headers when processing multiple files',
        'Implement proper error handling for file operations',
        'Use memory-efficient algorithms for large files',
        'Match the output format of the real tail command'
        ]
    },
    faq: [
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
    }
};