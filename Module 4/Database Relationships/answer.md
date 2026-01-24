# Database Relationships

## Definition of Database Relationship

A **database relationship** defines how two or more tables are connected to each other in a database. These relationships are created using **primary keys** and **foreign keys** and help organize data efficiently, reduce redundancy, and maintain data integrity.

In real-world applications like **e-commerce systems**, relationships are used to connect customers, orders, products, payments, and categories.

---

## Types of Database Relationships

There are three main types of database relationships:

1. One-to-One (1:1)
2. One-to-Many (1:N)
3. Many-to-Many (M:N)

---

## 1. One-to-One Relationship (1:1)

### Definition

In a **one-to-one** relationship, one record in a table is associated with only one record in another table.

### E-commerce Example

**User and User Profile**

* Each user has exactly one profile
* Each profile belongs to exactly one user

---

## 2. One-to-Many Relationship (1:N)

### Definition

In a **one-to-many** relationship, one record in a table can be associated with multiple records in another table.

### E-commerce Example

**Customer and Orders**

* One customer can place many orders
* Each order belongs to one customer

---

## 3. Many-to-Many Relationship (M:N)

### Definition

In a **many-to-many** relationship, multiple records in one table are associated with multiple records in another table. This relationship is implemented using a **junction (bridge) table**.

### E-commerce Example

**Orders and Products**

* One order can contain many products
* One product can be part of many orders

---