require('dotenv').config();
const restify = require('restify');

function index(req, res, next) {
  res.send('Server Working!');

  next();
}

const server = restify.createServer();

server.get('/', index);

server.listen(process.env.APP_PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});