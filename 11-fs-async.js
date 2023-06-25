const {readFile,writeFile}=require('fs')
console.log('starting');
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
   console.log(err)
   return
  }
  const first=result+'first result oy'

  readFile('./content/second.txt','utf8',(err,result)=>{
   if(err){
     console.log(err)
     return;
   }
   const second=result+'second result oy'
   
   writeFile(
     "./content/result-async.txt",
     `Here is the result : ${first},${second}`,
     (err, result) => {
       if (err) {
         console.log(err);
         return;
       }
       console.log('done wit this task')
      }
     )
   })
})

console.log('starting again');

