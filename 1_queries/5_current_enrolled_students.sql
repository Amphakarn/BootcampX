SELECT name, id, cohort_id
FROM students
WHERE end_date IS null 
OR end_date IS NULL
ORDER BY cohort_id;