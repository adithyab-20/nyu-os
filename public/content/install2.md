In this section, you'll set up a development environment for xv6 using Docker, which allows you to run xv6 locally on your computer in an isolated container. This gives you more control over your development environment while keeping everything safe.

## What is Docker?

Docker uses a technology called containers to create isolated environments.

### What's a Hypervisor?

* A hypervisor (Virtual Machine Monitor or VMM) is software that allows multiple operating systems to share hardware.
* It runs on a **host OS** and allows a **guest OS** to run as an application alongside others.
* Example: Running Linux inside Windows.

### How Are Containers Different?

* Containers share the host OS kernel but isolate the file system, processes, and network.
* They're lighter and faster than full virtual machines.

*Don’t worry if this feels abstract—you’ll learn more in future lectures.*

### What is Docker Doing?

Docker packages the entire development environment (Linux system, compiler, QEMU, etc.) into a **container** that works consistently across systems.

Key Components:

* **Dockerfile**: Blueprint for building the environment
* **Docker Image**: Snapshot created from the Dockerfile
* **Docker Container**: Running instance of the image

### Virtualization Advantage

Docker isolates xv6 within QEMU, which itself runs inside a Docker container. Crashes in xv6 don’t affect your system.

## Tasks

### Step 1: Install Docker Desktop

* Download Docker Desktop from the official website
* Install for your OS (Mac, Windows, or Linux)
* **Mac users:** Choose the correct version (Intel or Apple Silicon)
* Launch Docker Desktop

### Step 2: Pull the xv6 Image

Open a terminal and run:

```bash
docker pull ab12095/xv6-x86
```

**Apple Silicon Users:** If you get an error, run:

```bash
docker pull --platform linux/amd64 ab12095/xv6-x86
```

You may get a warning—this is expected as it's emulating x86.

### Step 3: Run the Container

```bash
docker run -it ab12095/xv6-x86
```

This creates and runs the container interactively.

**Useful Commands:**

```bash
docker ps -a                     # List all containers
docker start -ai <container_id> # Restart a stopped container interactively
```

### Step 4: Build and Run xv6

You should be in the `~/xv6-public` directory:

```bash
make           # Compile xv6
make clean     # Clean build files
make -j4       # (Optional) Speed up build using 4 threads
```

Run xv6:

```bash
make qemu-nox  # Console version (recommended)
make qemu      # Graphical version
```

**Exit xv6:**

* Press `Ctrl+A`, then `x`

**Exit the container:**

```bash
exit
```

**Control CPU count (recommended):**

```bash
make qemu-nox CPUS=1
```

This helps reduce concurrency issues during debugging.

**Try it out:** Once inside xv6, type `ls` to see available programs.

## Development Workflow

1. Edit xv6 source code
2. Run `make`
3. Run `make qemu-nox`
4. Test changes
5. Exit xv6
6. Run `make clean` if needed
7. Repeat

## Setting Up Visual Studio Code Integration (Recommended)

1. Install **VS Code** and **Dev Containers** extension
2. Start your container:

```bash
docker start -ai <container_id>
```

3. Attach VS Code:

   * Open Command Palette (Cmd+Shift+P or Ctrl+Shift+P)
   * Select: `Dev Containers: Attach to Running Container`
   * Pick your xv6 container

4. Inside VS Code:

   * Navigate to `xv6-public` folder
   * Open terminal: **Terminal → New Terminal**
   * Confirm you're in `/home/a/xv6-public`

5. Build and run:

```bash
make && make qemu-nox
```

Now you can develop and test xv6 entirely within VS Code!

## What You've Accomplished

You now have a fully functional, **locally hosted**, containerized xv6 development setup. You can:

* Edit and compile xv6
* Add system calls
* Explore kernel internals
* Recover quickly from crashes

**Pro tip:** You can always create a new container to reset your environment if things go wrong.
