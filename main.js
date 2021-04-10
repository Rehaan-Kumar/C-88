var canvas = new fabric.Canvas("myCanvas");

player_x = 30;
player_y = 30;
block_width = 30;
block_height = 30;
player_object = "";
block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(player_object);
    });
}

function block_update(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    console.log(e);
    key_press = e.keyCode;
    console.log(key_press);

    if (e.shiftKey == true && key_press == "80") {
        console.log("Shift + P");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if (e.shiftKey == true && key_press == "77") {
        console.log("Shift + M");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if (key_press == "38") {
        console.log("up arrow");
        up();
    }

    if (key_press == "40") {
        console.log("down arrow");
        down();
    }

    if (key_press == "37") {
        console.log("left arrow");
        left();
    }

    if (key_press == "39") {
        console.log("right arrow");
        right();
    }

    if (key_press == "67") {
        console.log("cloud");
        block_update("cloud.jpg");
    }

    if (key_press == "68") {
        console.log("dark green");
        block_update("dark_green.png");
    }

    if (key_press == "71") {
        console.log("ground");
        block_update("ground.png");
    }

    if (key_press == "76") {
        console.log("light green");
        block_update("light_green.png");
    }

    if (key_press == "82") {
        console.log("roof");
        block_update("roof.jpg");
    }

    if (key_press == "84") {
        console.log("trunk");
        block_update("trunk.jpg");
    }

    if (key_press == "85") {
        console.log("unique");
        block_update("unique.png");
    }

    if (key_press == "87") {
        console.log("wall");
        block_update("wall.jpg");
    }

    if (key_press == "89") {
        console.log("yellow wall");
        block_update("yellow_wall.png");
    }

}

function up() {
    if(player_y>0) {
        player_y = player_y - block_height;
        console.log(block_height);
        console.log(player_x , player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function down() {
    if(player_y<500) {
        player_y = player_y + block_height;
        console.log(block_height);
        console.log(player_x , player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function left() {
    if(player_x>0) {
        player_x = player_x - block_width;
        console.log(block_width);
        console.log(player_x , player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if(player_x<850) {
        player_x = player_x + block_width;
        console.log(block_width);
        console.log(player_x , player_y);
        canvas.remove(player_object);
        player_update();
    }
}