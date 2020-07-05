# Hands-On Exercise with MongoDB
## Insertion of objects with MongoDB shell
### Commands used [File: __grades.json__]:
> ``` db.student.insertOne({"name": "Mary Rose"}); ```

> ``` db.student.insertMany([{"name": "Mark Tony", "subject": "Mathematics", "type": "Hands-on Work", "value": 15.4},{"name": "Anna Mary", "subject": "English", "type": "Final Quiz", "value": 23.8},{"name": "Tim O'Brien", "subject": "Chemistry", "type": "Hands-on Work", "value": 24.0}]); ```

> ``` db.student.insert({"name": "Peter Lee", "subject": "History"}); ```

> ``` db.student.insert([{"name": "Jimmy Lake", "subject": "Physics", "type": "Final Quiz", "value": 17.8}, {"name": "Mika Tanaka", "subject": "Physics", "type": "Hands-on Work", "value": 22.8}]); ```