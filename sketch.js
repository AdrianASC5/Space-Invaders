function setup() {
    createCanvas(600,600);
    background ('black');
}

let x = 260;
let movelight = true;
function draw (){
    background (51);
    rect (x, 490, 10, 50);
    fill ('red');
    if (keyIsDown(LEFT_ARROW)){
        x -= 4;
    }
    else if (keyIsDown(RIGHT_ARROW)){

        x += 4;
    } 
    drawEnemy();
}

function drawEnemy(){
    let x = 50;
    let y = 50;
    fill("red");
    for(let i = 0; i < 7 ; i ++) {
        ellipse(x+=60,y, 50);
    }
    for(let i = 0; i < 2 ; i ++) {
        ellipse(x+=60,y, 50);
    }
   
}


