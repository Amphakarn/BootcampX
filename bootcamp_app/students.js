const { Pool } = require('pg');

// Set up connection to database
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const param = process.argv;
const cohortName = param[2];
const limit = param[3];

pool.query(`
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts
  ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE ('${cohortName}%')
  LIMIT ${limit};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));