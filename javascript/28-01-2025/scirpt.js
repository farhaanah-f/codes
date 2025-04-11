let A ="happy"; 
let B="hai";
let C="";

 for(i=0;i<A.length;i++){
  let same=0;
  for(j=0;j<A.length;j++){
    if (A[i] == A[j]) {

      if (same == 0) {
        C += A[j];
        same++;
      }

    }
    else {
      C += A[j];
    }
  }
  A = C;
  C = "";

}
for (let i = 0; i <A.length; i++) {
  let value = 0;
  for (let j = 0; j < B.length; j++) {
    if (A[i] == B[j]) {
        value++;

    }
  }
  console.log(A[i]+"-"+value);

}
