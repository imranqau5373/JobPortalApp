var jobData = {
    defalutUrl : 'http://api.jobs2careers.com/api/search.php?id=5720&pass=gQeQVknx7bGjOCpp&ip=...&q=...&l=...',
    userIp : '',
    format : 'json',
    zipcode : '',
    jobType : '',
    userAgent : ''

}

var settings = {
    "async": true,
    "crossDomain": true,
    //"url": "https://frozen-savannah-60393.herokuapp.com/login",
   "url": "http://localhost:3000/jobList",
    
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
  
    },
    "processData": false,
    "data": jobData 
  }



