class Rectangle {
    constructor(height,width ){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
     constructor(height, width, color, text){
         super(height,width);
         this.color =color;
         this.text = text;
     }
     show(){
         console.log(`text:${this.text} color: ${this.color}`);
     }
}


const lowpoly = new ColoredRectangleWithText(100,200, 'red', 'hello');
console.log(lowpoly.calcArea());
lowpoly.show();
