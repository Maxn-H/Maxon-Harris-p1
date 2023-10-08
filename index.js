var Express = require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNECTIONSTRING = "mongodb+srv://harrm136:West7631@cluster0.rcha2tv.mongodb.net/?retryWrites=true&w=majority";










var DATABASENAME = "MaxonApp";
var database;


app.listen(5038,()=>{
Mongoclient.connect(CONNECTIONSTRING, (error, client)=> {
   database = client.db(DATABASENAME);
   console.log("Mongo DB Connection Successful");
});
})


app.get('/maxonapptwo/MaxonApp/GetNotes',(request,response)=> {
    database.collection("MaxonAppCollection").find({}).toArray((error,result)=>{
        response.send(result);
    })
 })
 
 app.post('/maxonapptwo/MaxonApp/AddNotes',multer().none(),(request,response)=> {
    database.collection(MaxonAppCollection).count({},function(error,numOfDocs){
        database.collection("MaxonAppCollection").insertOne({
            id:(numOfDocs+1).toString(),
            description:request.body.newNnotes
        });
        response.json("Added Successfully");
 
 
    })
 })
 
 
 app.delete('/maxonapptwo/MaxonApp/DeleteNotes',(request,response)=> {
    database.collection(MaxonAppCollection).deleteOne({
        id: request.query.id
    });
    response.json("Deleted Successfully");
 })
 
 