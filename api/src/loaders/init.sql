CREATE TABLE todo(
  id SERIAL PRIMARY KEY,
  todo_name VARCHAR(255) UNIQUE,
  todo_description VARCHAR(255),
  todo_add_date DATE NOT NULL
  todo_update_date DATE NOT NULL
  todo_state BOOLEAN NOT NULL
);