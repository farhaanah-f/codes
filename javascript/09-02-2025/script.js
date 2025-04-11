class calculate{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return `addition of ${this.a} and ${this.b} is ${this.a+this.b}`;
    }
    subtract(){
        return `subtraction of ${this.a} and ${this.b} is ${this.a-this.b}`;;
    }  
    multiple(){
        return `multiplication of ${this.a} and ${this.b} is ${this.a*this.b}`;
    }  
    division(){
        return `division of ${this.a} and ${this.b} is ${this.a/this.b}`;

    }    
    
    }
let addition=new calculate (2,4);
let subtraction=new calculate(4,2);
let multiplication=new calculate(3,7);
let divide=new calculate(56,2);
console.log(addition.add());
console.log(subtraction.subtract());
console.log(multiplication.multiple());
console.log(divide.division());
 console.log("-----------------------------------------------------------------------------------------------")
class circle{
    pi=3.14;
    constructor(radius){
        this.radius=radius;
    }
    area(){
        return `Area of circle is ${this.pi*this.radius}`;
    }
}
let circleArea=new circle(5);
console.log(circleArea.area());
class rectangle{
    constructor(l,b){
        this.l=l;
        this.b=b;
    }
    getrectangle(){
        return `Area of rectangle is ${this.l*this.b}`;   
    }
}
let rectangleArea=new rectangle(6,8);
console.log(rectangleArea.getrectangle());


