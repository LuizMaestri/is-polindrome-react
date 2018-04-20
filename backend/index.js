const corsMiddleware = require('restify-cors-middleware') 
const errs = require('restify-errors');
const restify = require('restify');

const server = restify.createServer();

const cors = corsMiddleware({
    origins: ['http://localhost:8000'],
    allowHeaders: ['X-Requested-With'],
    exposeHeaders: []
});

server.pre(cors.preflight);
server.use(cors.actual);

server.get('/palindrome/:word', (req, res, next)=>{
    let { word } = req.params;
    word = word.replace(/[\s,\.\']/g, '').toUpperCase();
    res.send(word === word.split('').reverse().join('') ? 200: new errs.BadRequestError());
    next();
});

server.listen(8080, () => console.log('%s listening at %s', server.name, server.url));