## 1. File Structure and Organization (x86)

### Shared User/Kernel Header and Utility Files

* `types.h`, `fcntl.h`, `stat.h`, `date.h`

### Utility (Non-xv6) Programs

* `mkfs.c` — create filesystem images so xv6 can boot in QEMU

### User-Mode Code

* `user.h` — declarations of system call wrappers and standard library functions
* `usys.S` — assembly code for system call wrappers
* `ulib.c`, `printf.c`, `umalloc.c` — user-mode standard library

### Supplied xv6 Programs

* `cat.c`, `echo.c`, `forktest.c`, `grep.c`, `init.c`, `kill.c`, `ln.c`, `ls.c`, `mkdir.c`, `rm.c`, `sh.c`, `stressfs.c`, `usertests.c`, `wc.c`, `zombie.c`

### Kernel-Mode Code (Everything Else)

#### Declarations & Limits

* `defs.h` — kernel function declarations
* `param.h` — hard-coded system limits

#### Process-Related

* `proc.h`, `proc.c`
* `exec.c`, `elf.h`
* `file.h`, `file.c`, `pipe.c`

#### Memory Management

* `mmu.h`, `vm.c`, `kalloc.c`

#### Multicore

* `mp.h`, `mp.c`

#### Synchronization

* `spinlock.h`, `spinlock.c`, `sleeplock.h`, `sleeplock.c`

#### Exception/Trap Handling

* `traps.h`, `trap.c`, `trapasm.S`, `ioapic.c`, `lapic.c`, `picirq.c`

#### System Call Handling

* `syscall.h`, `syscall.c`
* `sysproc.c`, `sysfile.c`

#### I/O

* `buf.h`, `bio.c`, `console.c`, `ide.c`, `kbd.h`, `kbd.c`, `uart.c`

#### Filesystem

* `fs.h`, `fs.c`, `log.c`

#### Boot Handling

* `bootasm.S`, `bootmain.c`, `main.c`

#### Additional Files

* `entry.S`, `entryother.S` — entry points
* `swtch.S` — context switching
* `string.c` — string functions
* `x86.h`, `asm.h` — x86 definitions
* `memlayout.h` — memory layout
* `vectors.pl` — interrupt vectors
* `initcode.S` — first user program
* `kernel.ld` — linker script

---

## 2. Programming Notes

### File Descriptors

* `0` - standard input
* `1` - standard output
* `2` - standard error

Writing to `1` or `2` prints to the screen.

### Header Files

xv6 programs use:

* `types.h` - standard data types
* `user.h` - common functions

---

## 3. Dev Workflow Commands

### Building and Running

```bash
make clean     # Always start here when things break
make           # Build
make qemu-nox  # Run
```

### Debugging

```bash
make qemu-gdb  # Run with GDB support
gdb            # Debug in a separate terminal
```

### Exiting QEMU

* `Ctrl-A X` — exit QEMU (not Ctrl-C!)

---

## Adding Your First Program - `hello.c`

### 1. Create the Source File

```c
// hello.c
#include "types.h"
#include "stat.h"
#include "user.h"

int main(void) {
    printf(1, "Hello, xv6 world!\n");
    exit();
}
```

### 2. Modify the Makefile

In the `Makefile`, find the `UPROGS` section and add:

```make
UPROGS=\
    _cat\
    _echo\
    _hello\        # Add this line
    _grep\
    ...
```

### 3. Build and Test

```bash
make clean
make qemu-nox
```

Inside xv6:

```bash
hello    # Run your program
```

---

## Understanding xv6 Structure for Assignments

* No subdirectories — everything is flat

### Files You'll Commonly Edit

* `Makefile` — add new user programs
* `syscall.h` — add syscall numbers
* `syscall.c` — add syscall function pointers
* `sysproc.c` — implement process syscalls
* `sysfile.c` — implement file syscalls
* `user.h` — declare syscalls
* `usys.S` — add syscall stubs

---

## Assignment Workflow

### Typical Assignment Process

1. Read the assignment
2. Explore related xv6 code
3. Plan which files to change
4. Implement in small steps
5. Test edge cases and errors

### Resources to Bookmark

* **xv6 Book**:

  * Chapter 0: system call interface
  * Chapter 1: OS organization
* **Source Code**: Start with `cat.c`
* **Your Assignment**: Always understand the specs

### When You're Stuck

* Look at similar code examples
* Add debug prints
* Ask: “What would this look like in regular C/Linux?”
* Use office hours!
