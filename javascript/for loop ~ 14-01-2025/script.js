 let evensum=0;
 let oddsum=0;
 for(let i=1;i<=1000;i++){
    if(i%2==0){
        console.log("It is a even number"+ i);
        evensum+=i;

    }else{
        console.log("It is a odd number"+ i);
        oddsum+=i;
    }
 }console.log("the total of even numbers are "+ evensum);
console.log("the total of odd numbers are "+ oddsum);

