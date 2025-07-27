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

**Apple Silicon Users:** If you get an error:

![Image not found error](/nyu-os/content/images/install2-1-image-not-found-error.png)

Then run:

```bash
docker pull --platform linux/amd64 ab12095/xv6-x86
```

You may get a warning—this is expected as it's emulating x86.

![Image pull success](/nyu-os/content/images/install2-2-image-pull-success.png)

### Step 3: Run the Container

```bash
docker run -it ab12095/xv6-x86
```

![Run container success](/nyu-os/content/images/install2-3-image-run-success.png)

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

![Run xv6](/nyu-os/content/images/install2-4-run-xv6.png)

![Run command in xv6](/nyu-os/content/images/install2-5-run-command-in-xv6.png)

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

Coding in the terminal isn't ideal for larger projects. Here's how to set up VS Code for a much better development experience:

1. Install VS Code from the official website.
2. Install the **Dev Container extension** - this lets VS Code connect to Docker containers

   ![Install Dev Container extension](/nyu-os/content/images/install2-6-vs-code-extension.png)

3. Open up a terminal and start your container with `docker start -ai <container_id>`

3. Connect VS Code to the container

   * Open Visual Studio Code
   * Open Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`)
   * Select: `Dev Containers: Attach to Running Container`
   * Pick your xv6 container

   ![Find your xv6 container from extension](/nyu-os/content/images/install2-7-find-vs-code-extension.png)

4. Configure your workspace
   * VS Code will open a remote connection to your container
   * Navigate to the xv6-public folder if not automatically opened
   * Open the integrated terminal: Terminal → New Terminal
   * Verify you're in the correct directory (`/home/a/xv6-public`)

   ![Configure your workspace](/nyu-os/content/images/install2-8-vs-code-1.png)

5. Build and run:

```bash
make && make qemu-nox
```

![Build and run](/nyu-os/content/images/install2-9-vs-code-2.png)


Now you can develop and test xv6 entirely within VS Code!

## What You've Accomplished

You now have a fully functional, **locally hosted**, containerized xv6 development setup. You can:

* Edit and compile xv6
* Add system calls
* Explore kernel internals
* Recover quickly from crashes

**The best part?**  If something goes wrong, you can always start fresh with a new container without affecting your host system!
