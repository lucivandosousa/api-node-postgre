CREATE DATABASE nodepg;

CREATE TABLE products (
    id SERIAL PRIMARY key not null,
    description VARCHAR(255) not null,
    price float,
    quantity integer
);