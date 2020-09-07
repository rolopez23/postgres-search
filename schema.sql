CREATE DATABASE text

USE text,

CREATE table people (
  id INT,
  name VARCHAR(50),
  description VARCHAR(250),
  text_vector TSVECTOR  
)