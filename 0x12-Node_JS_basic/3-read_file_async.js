const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise(((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, params) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      let s = params;
      s = s.split('\n');
      const headers = s.shift().split(',');

      const groups = {};
      const studentsObjects = [];

      s.forEach((student) => {
        if (student) {
          const info = student.split(',');
          const studentObject = {};

          headers.forEach((header, index) => {
            studentObject[header] = info[index];
            if (header === 'field') {
              if (groups[info[index]]) {
                groups[info[index]].push(studentObject.firstname);
              } else {
                groups[info[index]] = [studentObject.firstname];
              }
            }
          });
          studentsObjects.push(studentObject);
        }
      });
      const numbers = `Number of students: ${studentsObjects.length}`;

      let response = `${numbers}\n`;
      console.log(numbers);

      for (const i in groups) {
        if (groups[i]) {
          const list = groups[i];
          const n = `Number of students in ${i}: ${list.length}. List: ${list.join(', ')}`;
          response += `${n}\n`;
          console.log(n);
        }
      }
      resolve(response);
    });
  }));
};