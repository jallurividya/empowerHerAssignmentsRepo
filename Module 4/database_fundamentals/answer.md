# Database Fundamentals – Conceptual Understanding

## 1. Why is `db.json` not suitable as a database for real projects?

Using a `db.json` file as a database is okay only for learning or very small projects. It is **not suitable for real applications** because of many problems.

### Limitations of file-based storage

* **Performance**: Every time data is needed, the whole file is read. When data becomes large, this makes the application slow.
* **Scalability**: File-based storage cannot handle large amounts of data or many users at the same time.
* **Reliability**: If the server crashes while writing data, the file may get damaged and data can be lost.

So, `db.json` is useful only for practice, testing, or demo projects, not for real-world applications.

---

## 2. What are the ideal characteristics of a database system (apart from just storage)?

A database system should do more than just store data. Some important characteristics are:

* **Performance**: It should store and fetch data quickly.
* **Concurrency**: Multiple users should be able to access and update data at the same time without problems.
* **Reliability**: Data should be safe even if the system crashes.
* **Data Integrity**: The database should keep data correct and consistent.
* **Scalability**: It should handle increasing data and users easily.
* **Fault Tolerance**: The system should continue working even if some part fails.

These features make databases reliable and suitable for real applications.

---

## 3. How many types of databases are there? What are their use cases or applications?

There are mainly **two types of databases**:

### 1. Relational Databases (SQL)

Relational databases store data in the form of tables (rows and columns).

**Examples**: MySQL, PostgreSQL, Oracle

**Use cases**:

* Banking systems
* E-commerce websites
* College or company management systems

**Reason for use**:

* Data is well structured
* Strong consistency and accuracy

---

### 2. Non-Relational Databases (NoSQL)

Non-relational databases store data in flexible formats like documents or key-value pairs.

**Examples**: MongoDB, Redis, Cassandra

**Use cases**:

* Chat applications
* Social media platforms
* Applications with large and fast-changing data

**Reason for use**:

* Handles large data easily
* Flexible structure
* Better for large-scale applications

---
