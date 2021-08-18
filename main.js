var canvas = new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

width_of_block=30;
height_of_block=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });



}
function newImage(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(width_of_block);
        block_object.scaleToWidth(height_of_block);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        width_of_block = width_of_block + 10;
        height_of_block = height_of_block + 10;
        document.getElementById("width").innerHTML=width_of_block;
        document.getElementById("height").innerHTML=height_of_block;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        width_of_block = width_of_block - 10;
        height_of_block = height_of_block - 10;
        document.getElementById("width").innerHTML=width_of_block;
        document.getElementById("height").innerHTML=height_of_block;
    }
    if(keyPressed == '38'){
        console.log("up");
                     up();
    }
    if(keyPressed == '40'){
        console.log("down");
                     down();
    }
    if(keyPressed == '37'){
        console.log("left");
                     left();
    }
    if(keyPressed == '39'){
        console.log("right");
                     right();
    }
    if(keyPressed == '87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keyPressed == '71'){
        newImage('ground.png');
        console.log("g");
    }
    if(keyPressed == '76'){
        newImage('light_green.png');
        console.log("l");
    }
    if(keyPressed == '84'){
        newImage('trunk.jpg');
        console.log("t");
    }
    if(keyPressed == '82'){
        newImage('roof.jpg');
        console.log("r");
    }
    if(keyPressed == '89'){
        newImage('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed == '68'){
        newImage('dark_green.png');
        console.log("d");
    }
    if(keyPressed == '85'){
        newImage('unique.png');
        console.log("u");
    }
    if(keyPressed == '67'){
        newImage('cloud.jpg');
        console.log("c");
    }
}
function up(){
    if(player_y >= 0){
        player_y = player_y - height_of_block;
        console.log("block image height =" + height_of_block);
        console.log("x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        console.log("removed");
        player_update();
    }
}
function down(){
    if(player_y <= 460){
        player_y = player_y + height_of_block;
        console.log("block image height =" + height_of_block);
        console.log("x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        console.log("removed");
        player_update();
    }
}
function left(){
    if(player_x > 0){
        player_x = player_x - width_of_block;
        console.log("block image width =" + width_of_block);
        console.log("x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        console.log("removed");
        player_update();
    }
}
function right(){
    if(player_x <= 850){
        player_x = player_x + width_of_block;
        console.log("block image width =" + width_of_block);
        console.log("x = " + player_x + " y = " + player_y);
        canvas.remove(player_object);
        console.log("removed");
        player_update();
    }
}