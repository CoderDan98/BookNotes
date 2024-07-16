# Project Name

Book Notes Application

## Description

The Book Notes Application is a web-based platform that allows users to manage and keep track of the books they have read along with their notes. With this application, you can add books to your collection, write detailed summary points, and easily organize your reading insights. Designed to be user-friendly, the Book Notes Application provides an intuitive interface for managing your book summaries, making it suitable for avid readers and book enthusiasts alike.

## Getting Started

### Prerequisites

- Node.js
- Postgres

1. **Clone the repository**

   ```bash
   git clone https://github.com/CoderDan98/BookNotesApp.git
   cd BookNotes
   ```

2. **Create Table & Insert Dummy Data**

   ```sql
   CREATE TABLE books (
    book_id SERIAL NOT NULL,
    isbn_id VARCHAR(255) NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    notes TEXT NULL,
    release_date DATE NOT NULL,
    author VARCHAR(255) NOT NULL,
    page_count INT NOT NULL,
    publisher VARCHAR(255) NOT NULL,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
   );
   ```

3. **Create .env File in the Server Directory & Update Values**

   ```plaintext
   DB_USER = 'your_user'
   DB_HOST = 'your_host'
   DB_DATABASE = 'your_database'
   DB_PASSWORD = 'your_password'
   DB_PORT = 'your_db_port'
   ```

4. **Install dependencies**

   ```bash
   cd client
   npm install

   cd ../

   cd server
   npm install
   ```

5. **Start Server**

   ```bash
   cd server
   nodemon server.js
   ```

6. Start Application

   ```bash
   cd client
   npm start
   ```
