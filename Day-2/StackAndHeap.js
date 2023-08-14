

//  Stack (Primitive) , Heap (Non primitive)

let myName = "Chayan"
 
    let anotherName = myName;
    anotherName = "sd" ;
    console.log(myName);
    console.log(anotherName);
//In this above code you will see, Original my name was not changed , Cause it saves in the stack.

    let user1 = {
        email : "abc@gmail.com",
        id : "123"
    }

    let user2 = user1;

    user2.email = "chayan@gamil.com";

    console.log(user1);
    console.log(user2);

    //Objects are non-primitive thats reason it will pass the referance .
    //Heap -> change somewhere it will change the main object also.