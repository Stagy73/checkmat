-- Create the User table
CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    hashed_password VARCHAR(255)
);

INSERT INTO User (name, email, hashed_password) VALUES
('John Doe', 'john@example.com', 'hashed_password_1'),
('Alice Smith', 'alice@example.com', 'hashed_password_2'),
('Bob Johnson', 'bob@example.com', 'hashed_password_3');


-- Create the Category table
CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name CHAR(255) NOT NULL,
    description TEXT
);
INSERT INTO Category (name, description)
VALUES
    ('Cirrus', 'High cloud types'),
    ('Cirrocumulus', 'High cloud types'),
    ('Cirrostratus', 'High cloud types');
    INSERT INTO Category (name, description)
VALUES
    ('Altocumulus', 'Medium cloud types'),
    ('Altostratus', 'Medium cloud types'),
    ('Nimbostratus', 'Medium cloud types');
INSERT INTO Category (name, description)
VALUES
    ('Stratocumulus', 'Low cloud types'),
    ('Stratus', 'Low cloud types'),
    ('Cumulus', 'Low cloud types'),
    ('Cumulonimbus', 'Low cloud types');




-- Create the Cloud table with foreign keys
CREATE TABLE Cloud (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    height INT,
    description TEXT,
    image_path VARCHAR(255),
    user_id INT,
    category_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (category_id) REFERENCES Category(id)
);
INSERT INTO Cloud (name, height, description, image_path, user_id, category_id) VALUES
('Cloud 1', 100, 'Description for Cloud 1', '/images/cloud1.jpg', 1, 1),
('Cloud 2', 120, 'Description for Cloud 2', '/images/cloud2.jpg', 2, 2),
('Cloud 3', 90, 'Description for Cloud 3', '/images/cloud3.jpg', 3, 1);


-- Create the User-Cloud association table
CREATE TABLE User_Cloud (
    user_id INT,
    cloud_id INT,
    ownership_date DATE,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (cloud_id) REFERENCES Cloud(id)
);
INSERT INTO User_Cloud (user_id, cloud_id, ownership_date) VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20'),
(3, 3, '2023-03-25');


-- Create the Category-Cloud association table
CREATE TABLE Category_Cloud (
    category_id INT,
    cloud_id INT,
    categorization_date DATE,
    FOREIGN KEY (category_id) REFERENCES Category(id),
    FOREIGN KEY (cloud_id) REFERENCES Cloud(id)
);

INSERT INTO Category_Cloud (category_id, cloud_id, categorization_date) VALUES
(1, 1, '2023-01-10'),
(2, 2, '2023-02-15'),
(1, 3, '2023-03-20');
