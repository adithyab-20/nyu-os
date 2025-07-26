Welcome to the Operating Systems course!
This guide will introduce you to the xv6 Operating System, how to get it up and running for your assignments and why we’re going to be using it for this class. For most assignments going forward, you’ll be working with the xv6 OS.

### What is xv6?

xv6 is a toy/teaching operating system that was built at MIT for their Operating Systems course. It's based on Sixth Edition Unix (v6), which was originally built for the PDP-11. Unlike Sixth Edition Unix though, it runs on x86 and later also on RISC-V. We'll be using the x86 version.

* xv6 Repository (x86 version): [https://github.com/mit-pdos/xv6-public](https://github.com/mit-pdos/xv6-public)

  > **Note:** Be careful not to use the RISC-V version, which is in a different repo.

### Why xv6?

* **It's Simple:** xv6 is small enough to be understood in a single semester. It has only 20 system calls, compared to the hundreds in a production OS like Linux.
* **It's Foundational:** It has all of the important pieces, so it gives a solid understanding of OS design.

### Programming in xv6 is different

Even though most of xv6 is written in C, programming the OS is different because:

* There is **no standard library**
* You work **closer to the hardware**
* You must understand **x86 assembly** for some parts

For example, process stack switching can’t be done in C and is written in assembly.

### Can xv6 run on real hardware?

Yes, technically. But it supports only very old hardware.
We use **QEMU** to emulate real hardware in software.

QEMU emulates the CPU loop (fetch-decode-execute) and boots xv6 like real hardware by loading disk sector 0 to memory address `0x7c00`.

### Development Advantages with QEMU

* When xv6 crashes inside QEMU, it only crashes the **QEMU process** (not your entire machine)
* Faster development iteration cycles

---

## Installing xv6

We provide two ways to get xv6 running. Pick one:

1. [**\[Cloud\]:** Using GitHub Codespaces](/installations/install1)
1. [**\[Local\]:** Using Docker](/installations/install2)

Both ensure consistent development environments.

---

## Assignment

You’ve gotten xv6 running. Now let's try writing a simple program for it.

Resources:

* [xv6 Source PDF](https://pdos.csail.mit.edu/6.828/2018/xv6/xv6-rev11.pdf)
* [xv6 Book PDF](https://pdos.csail.mit.edu/6.828/2018/xv6/book-rev11.pdf)

> **Note:** Be careful about mixing up x86 and RISC-V versions.

### Write "Hello world" in xv6

#### Step 1: Explore Before You Code

Look at `echo.c`, `cat.c`, `wc.c`, `ls.c`. Ask:

* What headers do they include?
* How is `printf()` different?
* What patterns do they follow?

#### Step 2: Create and Implement

* Create `hello.c` in the xv6 directory
* Implement a program that prints **Hello world**
* `printf()` works differently (requires specifying file descriptor)

#### Step 3: Integrate with Build System

* Edit the `Makefile`: add `_hello` to the `UPROGS` list
* Rebuild: `make`, then `make qemu-nox`
* Run: type `hello` in xv6 shell
