var express    = require('express'),
    cors       = require('cors'),
    md5  = require('MD5'),
    http       = require('http'),
    bodyParser = require('body-parser'),
    app        = express(),
    session    = require('express-session'),
    jwt        = require('jsonwebtoken'),
    expressJwt = require('express-jwt'),
    secret     = "4$4bmQH23+$IFTRMv34R5seffeceE0EmC8YQ4o$";



app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(session({ secret: secret, resave: true, saveUninitialized: true}));
app.use('/api/', expressJwt({secret: secret}));

var users = [{ user: 'malaniz', password: md5('1234')}];
app.post('/login', function (req, res) {
    //if (req.headers.authorization) {
    //  usr = jwt.decode(req.headers.authorization.replace('bearer ', ''));
    //}
    console.log(req.body);
    if ('credentials' in req.body) {
      req.body.credentials.password = md5(req.body.credentials.password);
      var user = users.find(function(x) {
        return (x.user === req.body.credentials.user) &&
               (x.password === req.body.credentials.password); 
      });

      if (user) {
        var token = jwt.sign(user, secret, { expiresinminutes: 60 * 5 });
        res.json({ token: token });
      } else {
        res.status(401).json({ err: 'ERR_LOGIN_INCORRECT' });
      }
    } else {
      res.status(404).json({ err: 'ERR_NO_CREDENTIALS' });
    }
});

app.post('/api/protected', function(req, res) {
  res.json({ok:1});
});

app.all('*', function(req, res){ 
  res.status(404).json({ err: 'ROUTE_NOT_FOUND'});
});

http.createServer(app).listen(8081, function() { 
  console.log("\n[*] Server Listening on port 8081"); 
});

