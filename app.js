app.get('/api/get',function(req,res) {

      var data = req.query.data;

      console.log('GET Parameter = ' + data);


      var result = data + ' Succese';

      console.log(result);


      res.send({result:result});

});


//AJAX POST METHOD
app.post('/api/post', function(req, res){

    var data = req.body.data;

      console.log('POST Parameter = ' + data);


      var result = data + ' Succese';

      console.log(result);

      res.send({result:result});

});
