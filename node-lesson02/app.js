const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const  counter = {
  count: 0
}

app.get('/get-total', function(req, res){
  res.send(counter);
});

app.post('/add-counter', function(req, res){
  counter.count = counter.count +1;
  res.send(counter);
})

app.post('/login', function (req, res) {
	var data = req.body;
	if (data.username === "mario" && data.password === "1234")
		res.send("SEI DENTRO!")
	else 
		res.send("VAI VIA, NON SEI GRADITO")
});


app.listen(3000, function(){
  console.log('server in ascolto sulla porta 3000');
});