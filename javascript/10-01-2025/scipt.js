let Name=prompt("Enter the Name");
let Age=Number(prompt("Enter the age"));
let Address=prompt("Enter the address");
let bloodgrp=prompt("Enter the Blood Group");
if(Name&&Age&&Address&&bloodgrp){
    console.log("Name:"+ Name);
    console.log("Age:"+ Age);
    console.log("Address:"+ Address);
    console.log("Blood Group:"+ bloodgrp);
}else{
    console.log("Enter a vaild key");
}