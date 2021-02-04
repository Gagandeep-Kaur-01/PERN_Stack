CREATE DATABASE pern_todo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

SELECT * FROM todo;

INSERT INTO todo(description) VALUES ('Hello');

SELECT description FROM todo;