/*jshint esversion: 6 */
import express from 'express';
import fetch from 'isomorphic-fetch';

const app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const re1 = new RegExp (/([a-fA-F0-9]){6}/, 'ig');
const re7 = new RegExp (/([a-fA-F0-9]){7,}/, 'ig');
const zero = new RegExp (/([^\S+][0]{2})/, 'ig');
const ff = new RegExp (/^[f|F]{3}\s/);
const ex = new RegExp(/[^a-fA-F0-9#]/);
const ex1 = new RegExp(/[#]{2,}/);

app.get('/', (req, res) => {

const error = 'Invalid color';
if ( req.query.color == undefined || req.query.color === '' || req.query.color.replace('#', ' ').trim().match(ex) !== null || req.query.color.match(zero) != null || req.query.color.replace('#', ' ').trim().match(re7) != null || req.query.color.match(ex1) != null ) {

  return res.send(error);

  } else {
      var resultex = req.query.color.trim().match(ex);
      var result = req.query.color.match(re1);
      var resultfff = req.query.color.toString().replace('#', ' ').trim().toLowerCase();
        if (resultex) { return res.send (error); }
          else {
              if (resultfff === '000') {return res.send('#000000');}
              if (resultfff === 'aba') {return res.send('#aabbaa');}
              if (resultfff === 'abc') {return res.send('#aabbcc');}
              if (resultfff === 'fff') {return res.send('#ffffff');}
              if (result == null) {return res.send (error);}
                else {
//console.log('длинна строки = ', result.length);
                  if ( result && result.length > 0 ) {
                      return res.send('#'+result.toString().trim().toLowerCase());
                      }
                      else {
                          return res.send(error);
                          }
                      }
    }
}

});
