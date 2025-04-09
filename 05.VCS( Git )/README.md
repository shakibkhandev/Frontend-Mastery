# Git Crash Course 🚀

A comprehensive guide to Git version control system, from basics to advanced concepts.

## Table of Contents

- [Introduction to Git](#introduction-to-git)
- [Git Installation](#git-installation)
- [Git Configuration](#git-configuration)
- [Core Git Commands](#core-git-commands)
- [Working with GitHub](#working-with-github)
- [Branching Workflow](#branching-workflow)
- [Collaboration Tips](#collaboration-tips)
- [Best Practices](#best-practices)
- [Resources](#resources)

## Introduction to Git

### What is Git?

Git is a distributed version control system that helps track changes in source code during software development. It enables multiple developers to work together on non-linear development.

### Git vs GitHub

- **Git**: A version control system that runs locally on your machine
- **GitHub**: A web-based platform that hosts Git repositories and adds collaboration features

> 💡 **Tip**: Think of Git as the engine and GitHub as the car - Git provides the core functionality, while GitHub provides the interface and additional features.

## Git Installation

### Windows

1. Download the installer from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer with default settings
3. Verify installation:

```bash
git --version
```

### macOS

```bash
# Using Homebrew
brew install git

# Verify installation
git --version
```

### Linux

```bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora
sudo dnf install git

# Verify installation
git --version
```

## Git Configuration

Set up your identity:

```bash
# Set username
git config --global user.name "Your Name"

# Set email
git config --global user.email "your.email@example.com"

# Set default editor (e.g., VS Code)
git config --global core.editor "code --wait"
```

View your configuration:

```bash
# List all configurations
git config --list

# View specific setting
git config user.name
```

## Core Git Commands

### Basic Commands

```bash
# Initialize a new repository
git init

# Clone a repository
git clone <repository-url>

# Check repository status
git status

# Add files to staging
git add <file-name>     # Add specific file
git add .              # Add all files

# Commit changes
git commit -m "Your commit message"

# View commit history
git log
```

### Branching and Merging

```bash
# List branches
git branch

# Create new branch
git branch <branch-name>

# Switch branches
git checkout <branch-name>

# Create and switch to new branch
git checkout -b <branch-name>

# Merge branches
git merge <branch-name>

# Rebase branch
git rebase <branch-name>
```

### Remote Operations

```bash
# Add remote repository
git remote add origin <repository-url>

# Push changes
git push origin <branch-name>

# Pull changes
git pull origin <branch-name>

# Fetch changes
git fetch origin
```

### Undoing Changes

```bash
# Reset to previous commit
git reset --hard <commit-hash>

# Revert a commit
git revert <commit-hash>

# Stash changes
git stash
git stash pop
```

## Working with GitHub

### Creating a New Repository

1. Go to GitHub.com and sign in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Fill in repository details
5. Click "Create repository"

### Connecting Local Repo to GitHub

```bash
# Initialize local repository
git init

# Add remote repository
git remote add origin <repository-url>

# Push to GitHub
git push -u origin main
```

## Branching Workflow

### Feature Branch Workflow

1. Create feature branch from main

```bash
git checkout -b feature/new-feature
```

2. Make changes and commit

```bash
git add .
git commit -m "Add new feature"
```

3. Push feature branch

```bash
git push origin feature/new-feature
```

4. Create Pull Request on GitHub
5. Review and merge changes

## Collaboration Tips

### Forking and Contributing

1. Fork repository on GitHub
2. Clone your fork

```bash
git clone <your-fork-url>
```

3. Add upstream remote

```bash
git remote add upstream <original-repo-url>
```

4. Create feature branch and make changes
5. Push to your fork
6. Create Pull Request

### Resolving Merge Conflicts

1. Pull latest changes

```bash
git pull origin main
```

2. Resolve conflicts in your editor
3. Add resolved files

```bash
git add <resolved-file>
```

4. Complete merge

```bash
git commit -m "Resolve merge conflicts"
```

## Best Practices

### Writing Good Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Be specific and descriptive
- Keep first line under 50 characters
- Use body for detailed explanation

Example:

```
Add user authentication feature

- Implement JWT token generation
- Add login and register endpoints
- Create user model and migrations
```

### Using .gitignore

Create `.gitignore` file to exclude files:

```
# Dependencies
node_modules/
vendor/

# Environment files
.env
.env.local

# IDE files
.vscode/
.idea/

# Build output
dist/
build/
```

### Keeping Clean History

- Use `git rebase` to maintain linear history
- Squash commits before merging

```bash
git rebase -i HEAD~3  # Interactive rebase last 3 commits
```

## Resources

### Learning Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

### Tools

- [GitHub Desktop](https://desktop.github.com/) - GUI for Git
- [GitKraken](https://www.gitkraken.com/) - Git GUI client
- [GitHub CLI](https://cli.github.com/) - Command-line interface

### Cheat Sheets

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

> 📝 **Note**: This guide covers the most common Git operations. For advanced topics, refer to the official documentation.

> ⚠️ **Warning**: Always backup your work before performing destructive operations like `git reset --hard`.
