export const homeworkList = {
    hw0: {
        number: 0,
        title: 'Getting familiar with xv6',
        description: 'Get familiar with the xv6 operating system and its development environment.',
    },
    hw1: {
        number: 1,
        title: 'Implementing unix tail command in xv6',
        description: 'Implement a simplified version of the Unix tail command in xv6.',
    }
}

export const installationList = {
    install1: {
        number: 1,
        title: '[Cloud] Setting up xv6 with GitHub Codespaces',
        description: 'Set up your development environment using GitHub Codespaces. Learn essential command-line tools and version control basics.',
    },
    install2: {
        number: 2,
        title: '[Local] Setting up xv6 using a Docker Container',
        description: 'Set up your development environment using a Docker container. Learn essential command-line tools and version control basics.',
    }
}

export const xv6DevResourcesList = {
    "xv6-dev-resources": {
        number: 1,
        title: 'xv6 Development Resources',
        description: 'Resources for developing xv6.',
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


export const xv6DevResourcesFaqs = {
    "xv6-dev-resources": [
        {
          "question": "Q: It won't compile!",
          "answer": "A: Did you run `make clean` first? Are you in the correct directory? Did you modify the Makefile correctly? Are there syntax errors?"
        },
        {
          "question": "Q: I can't exit QEMU!",
          "answer": "A: Use Ctrl-A X. If you're stuck, kill the terminal and restart."
        },
        {
          "question": "Q: My changes aren't showing up!",
          "answer": "A: Run `make clean && make qemu-nox` and check that your program is listed in the `UPROGS` section of the Makefile."
        },
        {
          "question": "Q: Docker/Container Problems!",
          "answer": "A: \n- Container exits immediately: Ensure Docker Desktop is running and virtualization is enabled in BIOS (Windows).\n- Cannot connect Dev Containers: Restart Docker and verify the container is running with `docker ps`.\n- Lost work: Use `docker start -ai <container_id>`, do not reuse `docker run` after initial setup.\n- Stuck in xv6: Use Ctrl-A then x. If that fails, run `docker stop <container_id>`.\n- Exit properly: Exit xv6 with Ctrl-A then x, then type `exit` to leave the container."
        }
      ]
};