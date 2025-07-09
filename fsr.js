const fs=require('fs');
fs.readFile("a.txt","UTF-8",(err,data)=>
{
    if(err){
        console.log(err)
        return
    }
    console.log("content from file"+data);
});
console.log("After read file operation statement 1");
console.log("After read file operation statement 2");