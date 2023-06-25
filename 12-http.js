const http=require('http')

const server=http.createServer((req,res)=>{
   if(req.url==='/'){
   res.end('welcome welcome welcome')
   } else if(req.url==='/about'){
     res.end('here is our story')
   }else{
    res.end(`<h1>Oops!</h1>
     <p>We can not find the page you are looking for</p>
     <a href="/">back home</a>
     `);
   }
 });

server.listen(5000)
