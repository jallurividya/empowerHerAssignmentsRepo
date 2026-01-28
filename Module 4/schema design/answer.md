# Schema Design in Relational Databases

## 1. What schema design is and what a database schema represents

**Schema design** is the process of planning and structuring how data will be stored in a relational database before creating tables or writing backend code. It involves deciding:

* What tables are needed
* What columns each table will have
* The data types of columns
* Relationships between tables
* Constraints and rules on data

A **database schema** represents the overall blueprint of the database. It defines the logical structure of the database, just like a blueprint defines the structure of a building.

**Example:**
In an e-commerce system, the schema may include `users`, `products`, and `orders` tables along with relationships between them.

---

## 2. Why schema design is required before writing backend code

Schema design must be done before backend development because backend logic depends directly on the database structure.

Reasons:

* Backend APIs rely on table structures and relationships
* Poor schema decisions lead to frequent code changes
* Well-designed schemas simplify queries and logic

**Example:**
If the schema allows one user to have multiple orders, backend code can safely implement features like order history.

---

## 3. How poor schema design impacts data consistency, maintenance, and scalability

### Data Consistency

* Duplicate data may cause conflicting values
* Updates may not reflect everywhere

**Example:**
Storing user email in both `users` and `orders` tables can cause mismatches.

### Maintenance

* Harder to modify tables
* Small changes affect multiple areas

### Scalability

* Large unoptimized tables slow down queries
* Poor relationships increase join complexity

Poor schema design makes the database difficult to manage and scale.

---

## 4. Validations in schema design and why databases enforce them

Validations are rules applied to ensure correct and reliable data.

Common validations:

* **NOT NULL** – prevents empty values
* **UNIQUE** – avoids duplicate values
* **DEFAULT** – assigns a default value
* **PRIMARY KEY** – uniquely identifies a row
* **FOREIGN KEY** – enforces relationships

**Example:**

```sql
email TEXT UNIQUE NOT NULL
```

Databases enforce validations to maintain data integrity and reduce errors.

---

## 5. Difference between a database schema and a database table

| Database Schema       | Database Table                 |
| --------------------- | ------------------------------ |
| Overall design        | Stores actual data             |
| Blueprint of database | Collection of rows and columns |
| Defines relationships | Represents one dataset         |

---

## 6. Why a table should represent only one entity

Each table should represent a single real-world entity to:

* Avoid duplication
* Maintain normalization
* Improve clarity

**Example:**

* `users` table → user details
* `orders` table → order details

Mixing multiple entities in one table leads to confusion and redundancy.

---

## 7. Why redundant or derived data should be avoided

* **Redundant data** causes inconsistency
* **Derived data** can be calculated when needed

**Example:**
Instead of storing `total_price`, calculate it using:

```
quantity × unit_price
```

Avoiding redundancy improves accuracy and storage efficiency.

---

## 8. Importance of choosing correct data types

Choosing the right data type ensures:

* Better performance
* Correct data storage
* Reduced storage space

**Examples:**

* Use `INT` for IDs
* Use `DATE` for dates
* Use `BOOLEAN` for true/false values

Correct data types prevent invalid data and improve query efficiency.

---