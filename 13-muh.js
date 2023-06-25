// const _=require('lodash')

// const items=[1,[2,[3,[4]]]]
// const newItems=_.flattenDeep(items)
// console.log(newItems);
// console.log('Hello pepe');


// console.log('first task');

// setTimeout(() => {
//  console.log('second task');
// }, 0);

// console.log('next task');

// const {readFile}=require('fs')

// console.log('starated a first task')

// //check file path

// readFile('./content/first.txt','utf8',(err,result)=>{
//  if(err){
//   console.log(err)
//   return;
//  }
//  console.log(result)
//  console.log('comleted first task');;
// });
// console.log('starting next1 task');

// console.log('first');
// setTimeout(() => {
//  console.log('second');
// }, 0);
// console.log('third');

// setInterval(() => {
//  console.log('hello world');
// }, 0);
// console.log('I will run first');

// const http=require('http')

// const server=http.createServer((req,res)=>{
//  console.log('request event')
//  res.end('hello 123 656 world')
// })

// server.listen(5000,()=>{
//  console.log('Server listening on port: 5000...');
// })

const http=require('http')

const server=http.createServer((req,res)=>{
  if(req.url==='/'){
   res.end('Home page')
  }else if(req.url==='/about'){
   //BLOCKING CODE!!1
   for (let i=0;i<100; i++){
    for (let j=0;j<100;j++){
     console.log(`${i} ${j}`);
    }
   }
   res.end('About Page')
  }else{
   res.end(`<h1>Oops!</h1>
     <p>We can not find the page you are looking for</p>
     <a href="/">back home</a>
     `);
  }
})

server.listen(5000,()=>{
 console.log('Server Listening on port 5000...');
})
