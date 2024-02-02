const http = require('node:http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const students = await countStudents(process.argv[2]);
      res.write('This is the list of our students');
      res.end(students);
    } catch (error) {
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port, hostname);

module.exports = app;
