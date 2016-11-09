/*jshint esversion: 6 */
import express from 'express';
import fetch from 'isomorphic-fetch';

const app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const re = new RegExp (/(\S+)/, 'ig');
const re1 = new RegExp (/(\d+)|([\/]+)|([_]+)/, 'ig');



app.get('/', (req, res) => {

var result = req.query.fullname.match(re);

if ( req.query.fullname == undefined || req.query.fullname === '' || req.query.fullname.match(re1) != null ) {
//if ( typeof (req.query.fullname) != 'string' || (req.query.fullname.match(re1)  != 'null' ) ) {
    //deal with value'

  const familiya = 'Invalid fullname';
  return res.send(familiya.toString());
} else {

        req.query.fullname = req.query.fullname.toLowerCase();

        if ( req.query.fullname.match(re).length < 2 )
        {const familiya = req.query.fullname.match(re)[0][0].toUpperCase() + req.query.fullname.match(re)[0].substr(1) ;
        return res.send(familiya.toString());
        }

        if ( req.query.fullname.match(re).length < 3 )
        {const familiya = req.query.fullname.match(re)[1][0].toUpperCase() + req.query.fullname.match(re)[1].substr(1) + ` ` + req.query.fullname.match(re)[0].substr(0,1).toUpperCase() +`.`  ;
        return res.send(familiya.toString());
        }

        if ( req.query.fullname.match(re).length < 4 )
        {const familiya = req.query.fullname.match(re)[2][0].toUpperCase() + req.query.fullname.match(re)[2].substr(1) + ` ` + req.query.fullname.match(re)[0].substr(0,1).toUpperCase() +`.`+ ` ` + req.query.fullname.match(re)[1].substr(0,1).toUpperCase()+`.`  ;
        return res.send(familiya.toString());
        }

        if ( req.query.fullname.match(re).length >= 4 )
        { const familiya = 'Invalid fullname';
        return res.send(familiya.toString());
        }
      }

});
