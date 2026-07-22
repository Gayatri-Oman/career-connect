-- Create the database
CREATE DATABASE IF NOT EXISTS career_connect;

-- Use the database
USE career_connect;

-- Create jobs table
CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    company VARCHAR(100),
    location VARCHAR(100)
);

-- Insert sample data
INSERT INTO jobs (title, company, location)
VALUES
("Software Developer", "Google", "Bangalore"),
("Frontend Developer", "Microsoft", "Hyderabad");