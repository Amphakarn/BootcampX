SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON student_id = students.id
WHERE students.end_date IS NULL
OR students.end_date IS null
GROUP BY students.name;