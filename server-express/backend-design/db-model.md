# Digital Book Club Models

### Member

- Member has many Books (Pk)

### Book

- Book belong to many Members
- Book has many comments (through bookId)

### Comment

- Comment belongs to many Members
- Comment belongs to Book (through bookId)

---

## Model Attributes

### Member

(id- Primary Key)

- first name
- last name
- email
- password

### Book

- title
- author
- genre
- ISBN

### Comments

(commentId - Foreign Key)

- strings
