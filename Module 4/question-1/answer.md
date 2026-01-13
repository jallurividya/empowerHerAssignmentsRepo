# Q1. Node.js Architecture

Node.js is a runtime environment that allows JavaScript to run outside the browser. Its architecture is designed to support **asynchronous and non-blocking operations**, making it suitable for scalable backend applications.

---

## JavaScript Engine (V8)

- V8 is Google’s JavaScript engine written in C++.
- It converts JavaScript code directly into machine code.
- This results in faster execution compared to interpretation.
- In Node.js, V8 is responsible only for **executing JavaScript code**.

---

## Node.js Core APIs

- Core APIs are built-in modules provided by Node.js.
- They allow applications to interact with the operating system.
- Common examples:
  - `fs` – file system operations
  - `http` – handling HTTP requests and responses
  - `path` – managing file paths
  - `crypto` – encryption and hashing
- These APIs internally use native bindings and libuv.

---

## Native Bindings

- Native bindings act as a bridge between JavaScript and C/C++ code.
- They allow Node.js to access low-level system features.
- Used when performance or OS-level access is required.
- Example: File system operations rely on native bindings.

---

## Event Loop

- The event loop is the core of Node.js asynchronous behavior.
- It continuously checks for completed operations.
- Executes callbacks without blocking the main thread.
- Enables Node.js to handle many requests using a single thread.
- Works closely with libuv.

---

# Q2. libuv

## What is libuv?

- libuv is a multi-platform C library used by Node.js.
- It provides support for asynchronous I/O operations.
- It hides operating system differences from Node.js.

## Why Node.js needs libuv

- JavaScript cannot directly interact with the OS.
- libuv handles file system, networking, and timers.
- It enables non-blocking behavior across platforms.

## Responsibilities of libuv

- Managing the event loop
- Handling asynchronous I/O operations
- Managing the thread pool
- Scheduling timers and callbacks

---

## Q3. Thread Pool

## What is a thread pool?

- A thread pool is a group of background threads.
- Used to execute blocking or time-consuming tasks.
- Runs separately from the main event loop thread.

## Why Node.js uses a thread pool

- Some operations are inherently blocking.
- Blocking the main thread would freeze the application.
- The thread pool ensures smooth performance.

## Operations handled by the thread pool

- File system operations (`fs`)
- DNS lookups
- Cryptographic functions
- Compression and decompression

> By default, Node.js uses **4 threads** in the thread pool.

---

# Q4. Worker Threads

## What are worker threads?

- Worker threads allow JavaScript code to run in parallel.
- Each worker has its own event loop and memory space.
- Created explicitly by developers.

## Why are worker threads needed?

- To handle CPU-intensive tasks.
- Prevent blocking of the main event loop.
- Useful for heavy computations like image processing.

## Difference between thread pool and worker threads

| Thread Pool | Worker Threads |
|------------|----------------|
| Managed internally by Node.js | Managed by developers |
| Used for native blocking tasks | Used for CPU-heavy JavaScript |
| Fixed number of threads | Flexible number of workers |

---

# Q5. Event Loop Queues

## Macro Task Queue

- Contains tasks scheduled by external events.
- Examples:
  - `setTimeout`
  - `setInterval`
  - I/O callbacks
  - `setImmediate`

## Micro Task Queue

- Contains small, high-priority tasks.
- Examples:
  - `Promise.then()`
  - `Promise.catch()`
  - `queueMicrotask()`

## Execution Priority

- Micro tasks always execute **before** macro tasks.
- After each macro task, all micro tasks are completed.

### Execution Order Summary

1. Execute current JavaScript code
2. Execute all micro tasks
3. Execute one macro task
4. Repeat the cycle

---

## Conclusion

Node.js achieves high performance by combining:

- V8 for fast JavaScript execution
- libuv for asynchronous I/O
- Event loop for non-blocking operations
- Thread pool and worker threads for heavy tasks

This architecture makes Node.js efficient, scalable, and suitable for modern backend development.
