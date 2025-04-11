let A = "happy";
let B = "day";
let C =0;


for(let i=0;i<A.length;i++){
    for(let j=0;j<B.length;j++){
        if(A[i]==B[j]){
            C++;
        }
    }
    console.log(A[i],"-",C);
}