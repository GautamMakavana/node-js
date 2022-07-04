
//node  tutorial 


// const a = 5
// const b = 10

// console.log("a is equal to %s and b  is equal to:%s",a,b)
// console.log(a*b)



// /**    module5 */

// // const os = require("os")

// // console.log(os.type())
// // console.log(os.platform());

// //const car = {
//    // brand:"BMW",//console.log("Node App")
//4
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

// const http = require("http")
// http.get('http://api.open-notify.org/astros.json',resp=>{
//     let data ='';
//     resp.on('data',chunk=>{
//         data += chunk
//     })

//     resp.on('end',()=>{
//         let jsondata = JSON.parse(data)
//         console.log(data)

//     })
// })


// const http = require("https")

// const data = JSON.stringify({
//     name:"john doe",
//     job:"content writer"
// })

// const options = {
//     hostname:'reqres.in',
//     path:'/api/users',
//     method:'POST',
//     header :{
//         'Content-Type':'application/json'
//     }
// }


// const req = http.request(options,(res)=>{
//     let body = '';
//     console.log("Status Code:",res.statusCode)

//     res.on('data',(chunk)=>{
//         body += chunk

//     })

//     res.on('end',()=>{

//         console.log("Body:",JSON.parse(data))

//     })
// })

//   req.write(data)
//   req.end()


//or post
// const axios = require("axios")

// const data = JSON.stringify({
//     name:"john doe",
//     job:"content writer"
// })

// axios.post('https://reqres.in/api/users',data).then(res=>{


//      console.log(`Status Code:${res.status}`)
//      console.log(`Body:${JSON.stringify}`);


// }).catch(err=>{
//     console.log(err)
// })

 /** working with files */

//  const fs = require("fs");
//  fs.readFile("text.txt",'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)

//  })
//   const data = fs.readFileSync('text.txt',{encoding:'utf-8',flag:'r'});
//     console.log(data);

//     fs.stat('text.txt',(err,stats)=>{
//         if(err){
//             console.error(err);
        
//         return
//         }

//         console.log(stats.isFile())
//         console.log(stats.isDirectory())
//         console.log(stats.isSymbolicLink())
//         console.log(stats.size)
//     })


/**  writing & updating file */
//syncronous
//  const fs = require('fs')
//   const content = [{
//      type:" node application"
//  }];

//    fs.writeFileSync('test.json',JSON.stringify(content));
  //open filee reading writing a
  //a+ append data         w+   upadate
  //a writen
  //r+  read and
  //unlink delete
  //a writing
// const fs = require('fs')
// const content = "node app"

// fs.writeFile('text.txt',content,{flag:'a'},err=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("successfully done")
// })

// const fs = require('fs')
// const content = "node app"

// fs.unlink('text.txt',err=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("successfully done")
// })

/** routing */

// const http = require("http")


// function index(req,res){
//     res.writeHead(200)
//     res.end("node routing")
// }

//   function aboutus(req,res){
//     res.end("this is about page")
//   }
// http.createServer(function(req,res){
//     if(req.url =='/'){
//         return index(req,res);

//     }
//     if(req.url =='/aboutus'){
//        return aboutus(req,res)
//     }
// }).listen(8000)

//or code

// const http = require("http")

// const routes = {
// '/':function index(req,res){
//     res.writeHead(200)
//     res.end("node routing")

// },
// '/aboutus': function aboutus(req,res){
//     res.end("this is about page")
//   }
// }
// http.createServer(function(req,res){
//     if(req.url in routes){
//         return routes[req.url](req,res);

//     }
//     if(req.url =='/aboutus'){
//        return aboutus(req,res)
//     }
// }).listen(process.env.PORT||8000)


/** path module */

//const path = require("path");
//file = path.basename("test.json")
//file = path.dirname("node/test.json")
//file = path.isAbsolute("C:/Users/admin/Desktop/node")

///let dir = "tutorial"
//file = path.join('C:','Users/admin/Desktop',dir,'Test.json');


//file = path.parse('node////text.json');
// 
/** event module */

// 
// const events = require("events")
// let ev = new events.EventEmitter();
// ev.on('my_event',function(data){
//     console.log("event:",data);
// })

// ev.emit('my_event',"call emit() method to file my_event")

// const events = require("events")
// let ev = new events.EventEmitter();
// ev.once('eventOnce',()=>console.log("event"))

// ev.emit('eventOnce')

// const events = require("events")
// let ev = new events.EventEmitter();
// ev.once('eventOnce',(code,msg)=>console.log(`got${code}and${msg}`))

// ev.emit('eventOnce',200,'ok')

// const events = require("events")
// let ev = new events.EventEmitter();
// var c1= (code,msg)=>console.log(`got${code}and${msg}`)

// ev.once('eventOnce',c1)
// ev.off('eventOnce',c1)

// ev.emit('eventOnce',200,'ok')


/** stream */

//memory and  time eefficient


// const http = require ("http")
// const fs = require("fs")

// const server =http.createServer(function(req,res){
//     fs.readFile('test.json',(err,data)=>{
//         res.end(data)
//     })
// })


// server.listen(3000,()=>{console.log("application running on 3000")})

// const http = require ("http")
//  const fs = require("fs")

//  const server =http.createServer(function(req,res){
//    const stream = fs.createReadStream('test.json');
//    stream.pipe(res);
//      })
 

//  server.listen(3000,()=>{console.log("application running on 3000")})

/** buffer */

//array of integer byte of data


// const buf = Buffer.from("hey");

// console.log(buf)
// console.log(buf.toString());
// console.log(buf[0]);
// console.log(buf[1])
// console.log(buf[2])

// const buf = Buffer.alloc(4);
// buf.write("hey!")
// //console.log(buf)
// console.log(buf.toString());
// console.log(buf[0]);
// console.log(buf[1])
// console.log(buf[2])

// buf[1] = 111//o
// console.log(buf.toString())

/** exception */

// 

//throw new Error('error message')

// 
// try{
//     console.log("try block");
//     throw new Error("error")
//     console.log("end try block")
//     }catch(err){
//     console.log("error message",err);
//     }

//promise
// doSomething1()
// .then(()=>{
//     return  doSomething2().catch(err => {
//         throw err
//     })
// })
// .then(()=>{
//     return  doSomething2().catch(err => {
//         //handle error
//         throw err
//     })
// })
//    .catch(err=> console.log.error(err)) 

// async function someFunction(){
//     try{
//         await someOtherFunction()
//     }catch(err){
//         console.error(err.message)
//     }
// }

/** express fast&easy jquery simplify node api   
 * express features
 * simple web server
 * middleware
 * restful api
 * functional programming
 * templetes
 * database mysql nosql */
