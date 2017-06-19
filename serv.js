exp=require("express")
app=exp()
app.use(exp.static(__dirname+"/public"))
app.listen(process.argv[2] || 3000,()=>console.log("ready"))
