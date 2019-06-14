CREATE TABLE houses(
    id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    address VARCHAR (120),
    state VARCHAR(40),
    zipCode INTEGER,
    city VARCHAR(80)
);

INSERT INTO houses(name, address, city, state, zipCode)
VALUES('My House', '4211 S. Westlake Dr.', 'Roy', 'UT', 84067);

SELECT * FROM houses;
