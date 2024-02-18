CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50),
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id)
);

INSERT INTO Courses (course_id, course_name, student_id) 
VALUES (1, 'Mathematics', 1);

INSERT INTO Courses (course_id, course_name, student_id) 
VALUES (2, 'Science', 1);

SELECT Students.student_name, Courses.course_name 
FROM Students 
INNER JOIN Courses 
ON Students.student_id = Courses.student_id;
-- Example SQL queries
