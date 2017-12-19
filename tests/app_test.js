var server   = require('../server'),
    chai     = require('chai'),
    chaiHTTP = require('chai-http'),
    should   = chai.should();

chai.use(chaiHTTP);

reqServer = process.env.HTTP_TEST_SERVER || server

describe('Basic routes tests', function() {

    it('GET to / should return 200', function(done){
        chai.request(reqServer)
        .get('/')
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        })

    })

    it('GET to /pagecount should return 200', function(done){
        chai.request(reqServer)
        .get('/pagecount')
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        })

    })
})




const fs = require('fs');

exports.test = "7654765476545461------------";


 //********************************* this is me


// const aaa = require('./mongodb2');
 //console.log(aaa.test);
 
 
 
 
 
  //********************************* this is me
 

  



//********************* 

fs.writeFile('./views/index.html', 'Hello Node----------.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});




