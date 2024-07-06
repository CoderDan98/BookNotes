**Books Table Creation Script**

```sql
CREATE TABLE books (
    book_id SERIAL NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    notes TEXT NULL,
    release_date DATE NOT NULL,
    author VARCHAR(255) NOT NULL,
    page_count INT NOT NULL,
    publisher VARCHAR(255) NOT NULL
);
```

**Books Table Dummy Data**

```sql
INSERT INTO books (title, description, notes, release_date, author, page_count, publisher) VALUES
('Book One', 'A thrilling mystery novel.', 'Bestseller', '2023-01-01', 'Author One', 300, 'Publisher One'),
('Book Two', 'An exciting science fiction tale.', 'Award-winning', '2022-05-15', 'Author Two', 250, 'Publisher Two'),
('Book Three', 'A fascinating historical fiction.', 'Critically acclaimed', '2021-09-10', 'Author Three', 400, 'Publisher Three'),
('Book Four', 'A heartwarming romance.', NULL, '2020-03-25', 'Author Four', 320, 'Publisher Four'),
('Book Five', 'A gripping horror story.', 'Highly recommended', '2019-11-05', 'Author Five', 280, 'Publisher Five');
```

**.env File Setup**

```plaintext
DB_USER = 'your_user'
DB_HOST = 'your_host'
DB_DATABASE = 'your_database'
DB_PASSWORD = 'your_password'
DB_PORT = 'your_db_port'
```
