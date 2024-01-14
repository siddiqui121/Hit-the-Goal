var canvas = new fabric.Canvas('myCanvas');
var ball = "Ball.png";
var hole = "Goal.png";
ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;
block_image_width = 5;
block_image_height = 5;
function load_img(){
	fabric.Image.fromURL("Goal.png", function(Img){
		hole.obj = Img;
		hole.obj.scaleToWidth(50);
		hole.obj.scaleToHeight(50);
		hole.obj.set({
			top: hole_y,
			left: hole_x
		});
		canvas.add(hole_obj);
	})
	new_image();
}
function new_image(){
	fabric.Image.fromURL("ball.png", function(Img){
		ball.obj = Img;
		ball.obj.scaleToWidth(50);
		ball.obj.scaleToHeight(50);
		ball.obj.set({
			top: ball_y,
			left: ball_x
	});
	canvas.add(ball_obj);
	});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("h3").innerHTML = "You have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	if(keyPressed == '38'){
		up();
		console.log("up");
	}
	if(keyPressed == '40'){
		down();
		console.log("down");
	}
	if(keyPressed == '37'){
		left();
		console.log("left");
	}
	if(keyPressed == '39'){
		right();
		console.log("right");
	}
}	
function up(){
	if(ball_y >= 0){
		ball_y = ball_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When up arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}
function down(){
	if(ball_y <= 450){
		ball_y = ball_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When down arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}
function left(){
	if(ball_x >5){
		ball_x = ball_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When left arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}
function right(){
	if(ball_x <=1050){
		ball_x = ball_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When right arrow key is pressed, X = " + ball_x + ", Y = " + ball_y);
		canvas.remove(ball_obj);
		new_image();
	}
}