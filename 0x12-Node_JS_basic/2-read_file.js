const fs = require('fs');

module.exports = function countStudents(path) {
  let s = [];

  try {
    s = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    throw Error('Cannot load the database');
  }
  s = s.split('\n');
  const headers = s.shift().split(',');

  const group = {};
  const studentsObjects = [];

  s.forEach((student) => {
    if (student) {
      const info = student.split(',');
      const studentObject = {};

      headers.forEach((header, index) => {
        studentObject[header] = info[index];
        if (header === 'field') {
          if (group[info[index]]) {
            group[info[index]].push(studentObject.firstname);
          } else {
            group[info[index]] = [studentObject.firstname];
          }
        }
      });
      studentsObjects.push(studentObject);
    }
  });

  console.log(`Number of students: ${studentsObjects.length}`);

  for (const info in groups) {
    if (group[info]) {
      const listStudents = group[info];
      console.log(`Number of students in ${info}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
    }
  }
};