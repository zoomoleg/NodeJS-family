/*jshint esversion: 6 */
import express from 'express';
import fetch from 'isomorphic-fetch';

const app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//const re = new RegExp (/(\S+)/, 'ig');
const re1 = new RegExp (/(\d+)|([\/]+)|([_]+)/, 'ig');
const re  = new RegExp (/(http:\/\/\w+.\w+.\w+\/)|(https:\/\/\w+.\w+.\w+\/)|(\/\/\w+.\w+.)|(\w+.\w+\/)|[@]/, 'ig');


app.get('/', (req, res) => {

var result = req.query.username.match(re);
console.log(req.query.username);
console.log(result);


if ( req.query.username == undefined || req.query.username === '' ) {

  const login = 'Invalid fullname';
  //return res.send(username.replace(re, '')+'@'+username.toString());
  console.log(req.query.username);
  console.log(login);
  return res.send(login);

} else {

  return res.send('@'+req.query.username.replace(re, '').toString());

    console.log(req.query.username);
    //return res.send('@'+req.query.username.toString());
}

});
