for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  console.log(
    "----------------------------------------------------------------------------------------------------------"
  );
  let threemultiple = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      threemultiple += i;
      console.log(i);
    }
  }
  
  let fivemultiple = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      fivemultiple += i;
      console.log(i);
    }
  }
  console.log("The Sum of 5 Multiple is " + fivemultiple);
  console.log("The Sum of 3 Multiple is " + threemultiple);
  console.log(
    "----------------------------------------------------------------------------------------------------------"
  );
  let factorial = 1;
  let n = 5;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
    console.log(factorial);
  }
  console.log(
    "----------------------------------------------------------------------------------------------------------"
  );





for(i=1;i<=100;i++){
    if(i%3==0){
        console.log("Fizz");
    }else if (i%5==0){
        console.log("Buzz");
    }else if((i%3==0)||(i%5==0)){
        console.log("FizzBuzz");
        
    }
    else{
        console.log(i)
    }
}