var express = require('express');
var getIP = require('ipware')().get_ip;

var router = express.Router();

var jobData = {
  defalutUrl : 'http://api.jobs2careers.com/api/search.php?id=5720&pass=gQeQVknx7bGjOCpp&ip=...&q=...&l=...',
  userIp : '',
  format : 'json',
  zipcode : '',
  jobType : '',
  userAgent : ''

}

function getClientIp(req) {
  var ipAddress;
  // The request may be forwarded from local web server.
  var forwardedIpsStr = req.header('x-forwarded-for'); 
  if (forwardedIpsStr) {
    // 'x-forwarded-for' header may return multiple IP addresses in
    // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
    // the first one
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    // If request was not forwarded
    ipAddress = req.connection.remoteAddress;
  }
  return ipAddress;
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/jobs', function(req, res, next) {
  res.render('jobs', { job: 'test job name' })
});

router.get('/jobList', function(req, res, next) {
  console.log('Zip parameter is ',req.query.zip);

console.log('type parameter is ',req.query.job_type);

console.log("Ip address is",req.connection.remoteAddress);

  res.render('jobList');
});

module.exports = router;
