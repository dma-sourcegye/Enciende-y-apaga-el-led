var express= require("express");
var five=require("johnny-five");
var app=express();
var port=8000;
var board = new five.Board();
var pin=9;

function Encender()
{
	board.digitalWrite(pin,1);
}
function Apagar()
{
	board.digitalWrite(pin,0);
}

app.listen(port,function (req,res){
	console.log("Servidor corriendo en el puerto: "+port);
});

app.get("/",function (req,res){
	res.sendfile("formulario.html");
});

app.post("/encender", function (req,res){
	Encender();
	console.log("Led encendido");
	res.redirect("/");
});

app.post("/apagar", function (req,res){
	Apagar();
	console.log("Led apagado");
	res.redirect("/");
});
