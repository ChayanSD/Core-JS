//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve,reject){
    // Do async task .
    //DB calls , Network , Cryptography etc
    setTimeout(function(){
        console.log("Async task is complete");
         //Now connect resolve to then
        resolve()
    },1000,false);

   
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//2nd promise 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Ansync task 2');
        resolve();
    },1000);
}).then(function(){
    console.log('Async task 2 resolved');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chayan",email : 'chayan@email.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


//4 th Promise 
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'MOngoUser',userEmail:"dsdf@email.com"})
        }else{
            reject('Error something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>console.log("The promise is either resolved or rejected"));


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username : 'javascript',password :'1234'});
        }else{
            reject('error js went wrong');
        }
    },1000)
})


 async function consumePromiseFive(){
    try{
        const resoponse = await promiseFive;
    console.log(resoponse);
    }catch(error){
        console.log(error);
    }
 }

 consumePromiseFive();

 async function getAllUsers(){
 try {
    const resoponse = await fetch('https://dummyjson.com/users');
   const data = await resoponse.json();
    console.log(data);
 } catch (error) {
    console.log('E:',error);
 }
    
}

// getAllUsers();

fetch('https://dummyjson.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))