## 🍃 MongoDB Hands-On

📦 DB Creation | 📁 Collections | 🛠️ CRUD | 🔍 Queries

## Key Terms.

Database → Holds collections

Collection → Like a table (stores documents)

Document → BSON-style object

🄚 _id →  Auto-generated, unique identifier

## 🏗️ Create a Database & Collection Using Compass

Create Database -> Database Name -> Collection Name -> Create Database

!['1.createDB.png'](./Images/1.createDB.png)

## ✍️ Insert Documents Using Compass

Insert Document -> insert keys and values. 

!['2.insert.png'](./Images/2.insert.png)

Use format button to make the document permitted.

!['4.format.png'](./Images/4.format.png)

Inserted Document

!['5.png'](./Images/5.png)

## ✍️ Edit Documents Using Compass

Edit -> Make changes -> Update

!['5.update.png'](./Images/5.update.png)

## ✍️ Insert Documents Using MongoDb Shell

Change database and display available databases and collections.

!['6.png'](./Images/6.png)

Enter one document - insertOne()

~~~
  db.students.insertOne({
  "regno": "2021IT006",
  "name": "Nova",
  "age": 24,
  "gender": "Male",
  "degree": "IT",
  "gpa": 3.7,
  "skills": [
    "JS",
    "MongoDb",
    "Nodejs"
  ]
})
~~~

!['7.insertOne.png'](./Images/7.insertOne.png)







