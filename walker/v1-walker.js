//Parameters for random-walker
let widthOfCanvas = window.innerWidth;
let heightOfCanvas = window.innerHeight;
let stepLength = 5;
let sizeOfStroke = stepLength;
let numOfWalkers = 50;
let walkers = []; //array of walkers

//creating a walker class
class Walker {
    constructor(x, y) {
        //Location(x,y) from where the walker starts
        this.x = x/2;
        this.y = y/2;
    }

    show() {
        //Uncomment to make colorful & comment the other stroke(0,rOpacity) & vice-versa
        // let rR = floor(random(0, 255)); //random red
        // let rG = floor(random(0, 255)); //random green
        // let rB = floor(random(0, 255)); //random blue
        // stroke(rR, rG, rB); //rgb

        let rOpacity = floor(random(0, 100));
        stroke(0, rOpacity);
        point(this.x, this.y);
        
    }

    step() {
        let choice = floor(random(4));

        switch (choice) {
            case 0:
                this.x += stepLength; // Move right
                break;
            case 1:
                this.x -= stepLength; // Move left
                break;
            case 2:
                this.y -= stepLength; // Move up
                break;
            default:
                this.y += stepLength; // Move down
        }
    }
}

function setup() {
    createCanvas(widthOfCanvas, heightOfCanvas);
    // background(0) //uncomment for darker background
    background(255, 249, 230);
    
    //number of walkers
    for (let i = 0; i <= numOfWalkers; i++){
        walkers[i] = new Walker(widthOfCanvas,heightOfCanvas);
    }
}

function draw() {
    strokeWeight(sizeOfStroke);

    for (let walker of walkers) {
        walker.step();
        walker.show();
    }
}
