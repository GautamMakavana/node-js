//console.log("Node App")
//4
// const a = 5
// const b = 10

// console.log("a is equal to %s and b  is equal to:%s",a,b)
// console.log(a*b)



// /**    module5 */

// // const os = require("os")

// // console.log(os.type())
// // console.log(os.platform());

// //const car = {
//    // brand:"BMW",
//     //model:"Z4"
// //}
// //console.log(car);

// //npm init
// //npm init -y
// //npm i lodash -save  require at runtime
// //npm i uuid  --save-dev require at development
// //npm install lodash -g  insall globally
// //npm  root -g locally
// //npm uninstall -g


// //console.log("NPM SCRIPT");

// //module.exports = car
// // exports.car = car

// /*      npx */

// const_ = require("lodash")

// //npm i cowsay

// //npx cowsy cowsy node.js is cool

//  /*  event loop */

// //  const bar = ()=> console.log('bar')
// //  const baz =()=> console.log('baz')

// //  const foo =()=>{
// //     console.log('foo')
// //     setTimeout(bar,1000)
   
// //     baz()
// //  }

// //   foo()
 
// /* callback*/

// function getMessage(msg,callback){
//     setTimeout(()=> {
//         console.log(msg)
//         callback()

//     },1000)
// }
 
// function DisplayMessage(){
//     console.log("Display message")
// }

// getMessage("get msg",() =>console.log("DisplayMessage"))
/* promises*/

// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=> resolve("run Before"),1000)

// });

// promise.then(
//     result=>{
//         console.log(result)
//         GetAfter()
//     },
//     error=>console.log(error)
// )

// function GetAfter(){
//     console.log("print after");
// }

/*      

 async and await  */


//  function Clown(){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve("icon")
//         },2000)
//     })
//  }

//   async function msg(callback){
//     const msg =  await Clown()
//     console.log("Message:" , msg)
//     callback();

//  }
// msg(getResult)

// function getResult(){
//     console.log("execute after");

// }

/**  http server */

// const http = require("http")
// const hostname = '127.0.0.1'
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.writeHead(200 ,{'Content-Type':'text/plain'})
//    // res.statusCode = 200;
//  //   res.setHeader('Content-Type','text/plain')
//  res.write("welcome to http server")
//     res.end()
// }).listen(port,hostname,()=>{
//     console.log(`server running on http://${hostname}:${port}`);


// //server.listen(port,hostname,()=>{
//    // console.log(`server running on http://${hostname}:${port}`);
// })

/**    makin http request */

const http = require("http")
http.get('http://api.open-notify.org/astros.json',resp=>{
    let data ='';
    resp.on('data',chunk=>{
        data += chunk
    })

    resp.on('end',()=>{
        let jsondata = JSON.parse(data)
        console.log(data)

    })
})