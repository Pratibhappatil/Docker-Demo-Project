const express=require("express")
const app=express();

app.get("/",(req, res)=>{
res.json([
{
    id:1
},
])
});
app.listen(5500,()=>{
    console.log("Running.....")
})