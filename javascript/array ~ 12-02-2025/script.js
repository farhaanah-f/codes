let array =[];
for (let i =0;i<3;i++){
    let user = prompt("Please Enter the User Name and Age and also please provide space between the username and age");
    let[username,age,...rest]= [user.split(" ")[0],[3]];
    console.log(rest);
    array.push({username,age});
 }