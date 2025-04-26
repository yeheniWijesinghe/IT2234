## 🍃 MongoDB Hands-On

 DB Creation | Collections |  CRUD |  Queries

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

## ✍️ Insert Documents Using MongoDB Shell

Change database and display available databases and collections.

!['6.shellCommands.png'](./Images/6.shellCommands.png)

Enter one document - insertOne()

~~~
  db.students.insertOne({
  "regno": "2021IT006",
  "name": "Nova",
  "age": 24,
  "gender": "Male",
  "degree": "IT",
  "skills": [
    "JS",
    "MongoDb",
    "Nodejs"
  ]
})
~~~

!['7.insertOne.png'](./Images/7.insertOne.png)

Inserted Documents.

!['8.png'](./Images/9.png)

Enter multiple documents - insertMany()

~~~
  db.students.insertMany(
[
{
  "regno": "2021IT007",
  "name": "Kevin",
  "age": 25,
  "gender": "Male",
  "degree": "IT",
  "skills": [
    "JS",
    "MongoDb",
    "MySQL"
  ]
},
{
  "regno": "2021IT008",
  "name": "Kate",
  "age": 24,
  "gender": "Female",
  "degree": "IT",
  "skills": [
    "JS",
    "MongoDb",
    "Nodejs"
  ]
}
]
)

~~~

Shell response.
~~~
  {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('680a513770bc7e6dddbd41d4'),
    '1': ObjectId('680a513770bc7e6dddbd41d5')
  }
}
~~~

Inserted Documents.

!['9.png'](./Images/9.png)

## 🛠️ Update Documents Using MongoDB Shell

Update one document - updateOne()

!['10.updateOne.png'](./Images/10.updateOne.png)

Updated Documents.

!['10.png'](./Images/10.png)

Update document - updateMany()

!['11.updateMany.png'](./Images/11.updateMany.png)

Updated Documents.

!['11.png'](./Images/11.png)


## 🧹 Delete Documents Using MongoDB Shell
~~~
 db.students.deleteOne({ regno: "2021IT006" })

 db.students.deleteMany({ degree: "IT" })
~~~
## 🧠 Query Operators
 • find() \n
 • project
 • sort
 • $gt -> greater than
 • $lt -> less than
 • $eq -> equal
 • $ne -> not equal
 • $in -> matches any in array
 • $nin -> doesn't matches any in array
 • $and / $or -> logical conditions

## 🔍 Find Data Using Compass

!['12.find.png'](./Images/12.find.png)

## 💡 Projecting Data Using Compass

!['12.selectedField.png'](./Images/12.selectedField.png)










