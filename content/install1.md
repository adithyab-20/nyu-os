In this section, you'll set up a development environment for xv6 using **GitHub Codespaces**, which lets you code in the cloud without installing anything on your personal computer.

## What is GitHub Codespaces?

GitHub Codespaces gives you a complete development environment that runs in your web browser. Think of it as having a Linux computer in the cloud that you can access from anywhere. When you're working with xv6, any crashes or issues stay in the cloud and won't affect your personal machine.

## Important Usage Guidelines

* **Free Tier Limits:** You get 60 hours per month on a 2-core machine for free. This should be plenty for your coursework, but you need to be smart about usage:

  * **Commit often** - Save your work frequently with git commits
  * **Push regularly** - Back up your code to GitHub
  * **Shut down when done** - Always stop your Codespace after each session to avoid burning through your hours
* More billing info: [GitHub Codespaces Billing Docs](https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-codespaces)

## Prerequisites

Make sure you have:

* A GitHub account (create one free at [github.com](https://github.com))
* Access to GitHub Codespaces (available with your GitHub account)

## Tasks

### Step 1: Get the xv6 Code

Create your own private copy of the xv6 source code:

1. **Create a new private repository on GitHub**

   * Name it `xv6-os`
   * Set it to **Private**
   * Copy the repository URL (e.g., `https://github.com/yourusername/xv6-os.git`)

2. **Clone the original xv6 repository locally**

```bash
git clone https://github.com/mit-pdos/xv6-public.git
cd xv6-public/
```

3. **Connect to your private repo**

```bash
# Check current remote (MIT repo)
git remote -v

# Remove old remote
git remote rm origin

# Add your private repo
git remote add origin https://github.com/yourusername/xv6-os.git

# Push to your repo
git push --set-upstream origin master
```

### Step 2: Create Your Codespace

Set up your cloud development environment:

* Go to your `xv6-os` repository on GitHub
* Click the green **"Code"** button > **"Codespaces"** tab
* Click **"Create codespace on master"**

Alternatively:

* Go to [https://github.com/codespaces](https://github.com/codespaces)
* Click **"New codespace"**
* Select your `xv6-os` repository
* Use default settings > Click **"Create codespace"**

In a few moments, a VS Code interface will open in your browser.

### Step 3: Install Required Software

Install QEMU in your Codespace:

```bash
# Confirm you're in the right directory
pwd
# Should be: /workspaces/xv6-os

# Update and install QEMU
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get install -y qemu-system
```

Try building xv6:

```bash
make
```

You may get a compiler error due to modern GCC versions.

To resolve:

```bash
sudo apt-get install gcc-9
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-9 90

make clean
```

### Step 4: Run xv6

Boot your OS:

```bash
make
make qemu-nox
```

You should see the xv6 shell prompt:

```
=== xv6 Development Environment ===
xv6 source is in: /home/a/xv6-public
1. Build xv6: make
2. Run xv6 OS: make qemu-nox
3. Exit xv6: Ctrl+A then X
a@ff05a735f6ad:~/xv6-public$
```

### Step 5: Shutting Down

* **Exit xv6:** Press Ctrl + A, then release both and press X
* **Stop your Codespace:** Go to [https://github.com/codespaces](https://github.com/codespaces) and stop your running Codespace

## What You've Accomplished

You now have a complete cloud-based development environment for xv6. You can:

* Modify kernel code
* Add system calls
* Explore how OS internals work

**Tips:**

* Commit and push changes often
* Always shut down your Codespace after use to save time
