var faker =require ("faker");
var UserController = require("../controllers/users")

var appRouter =function (app){
    
    app.get("/", function (req , res) {
        res.status(200).send("Bienvenido a nuestra Restful API");
    });
app.get("/users",function(req, res, next){
   UserController.getUsers(req, res, next);
    });
    
}
 
module.exports=appRouter;