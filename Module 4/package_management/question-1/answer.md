# Understanding Project Management in NodeJS

## a. Package Managers

### What is a package manager?

A **package manager** is a tool that helps developers install, update, remove, and manage external libraries (packages) that a project depends on. Instead of manually downloading code, a package manager automates the entire process.

**Example:**
If your backend project needs a library to create APIs, a package manager can install it with a single command instead of copying files manually.

---

### Why do we need package managers in backend development?

In backend development, applications depend on many third‑party libraries for tasks like routing, database access, authentication, and logging. Package managers:

* Save time by automating installation
* Ensure correct versions of libraries are used
* Make projects easy to share and run on different machines
* Handle dependency relationships automatically

---

### Problems faced if package managers are not used

Without package managers:

* Developers must manually download and manage libraries
* Version mismatches can break the application
* Project setup becomes slow and error‑prone
* Team collaboration becomes difficult
* Reproducing the same environment on another system is hard

---

## b. NPM (Node Package Manager)

### What is NPM?

**NPM (Node Package Manager)** is the default package manager for Node.js. It allows developers to install and manage JavaScript packages required for Node.js applications.

---

### Why is NPM important for Node.js applications?

NPM is important because:

* It provides access to thousands of open‑source packages
* It simplifies dependency management
* It helps maintain consistent project environments
* It integrates directly with Node.js

---

### How NPM helps in managing dependencies

NPM manages dependencies by:

* Listing required packages in `package.json`
* Installing exact versions automatically
* Updating dependencies when required
* Creating a dependency tree to avoid conflicts

**Example:**

```bash
npm install express
```

This command installs Express and records it as a dependency in `package.json`.

---

## c. Backend Project Initialization

### What is the command used to initialize a backend (Node.js) project?

The command used is:

```bash
npm init
```

---

### Explain what `npm init` and `npm init -y` do

#### `npm init`

* Starts an interactive process
* Asks questions like project name, version, description, author, etc.
* Creates a `package.json` file based on the answers

#### `npm init -y`

* Skips all questions
* Creates `package.json` with default values
* Faster way to initialize a project

---

## d. Files and Folders Created After Project Initialization

### package.json

* Contains project metadata
* Lists dependencies and scripts
* Acts as the blueprint of the project

**Importance:**

* Required to install dependencies
* Helps others understand and run the project

---

### node_modules

* Contains all installed packages and their dependencies
* Automatically created by NPM

**Importance:**

* Required for the project to run
* Can be recreated using `npm install`

---

### package-lock.json

* Records exact versions of installed packages
* Ensures consistent installs across all environments

**Importance:**

* Prevents version mismatch issues
* Improves reliability of builds

---

## GitHub Best Practices

### Files/Folders that should NOT be pushed to GitHub

* `node_modules/`

**Reason:**

* Very large in size
* Can be recreated using `npm install`

---

### Files that MUST be committed

* `package.json`
* `package-lock.json`

**Reason:**

* Required to install dependencies
* Ensures the project runs the same way for everyone

---
