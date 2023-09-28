// javaScript has two types of memory 
// 1.stack memory -: primitive data type - string ,number,bool. ,null,unfdefined,sybol,bigint.
// 2.heap memory -: non primitive(reference) -array ,object ,function

// stack memory

let myYoutube ="Gita Gyan773";

let anotherName =myYoutube;

anotherName ="shree Krishna"

console.log(myYoutube);

console.log(anotherName);

// it meins stack memory me kewal variable ki copy hi jati he orijanl value nhi jati he

// heap memory 

let userOne =
{
    email :"user@gamil.com",
    upi :"user@ybl"
}

let userTwo = userOne

userTwo.email ="vsr@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
