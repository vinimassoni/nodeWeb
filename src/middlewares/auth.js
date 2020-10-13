module.exports = app => {
    app.use((req, res, next) => {
           if(req.originalUrl == "/usuarios/login" || (req.originalUrl == "/usuarios" && req.method == "POST" )){
               next();
           }
           else {
               let token = req.headers.token;
   
               if(!token)
                   res.status(401).end();
               else {
                   app.get("jwt").verify(token, "chaveSecreta", (err, decoded) => {
                       if(err)
                           res.status(401).send("token inválido");
                       else {
                           req.decoded = decoded;
                           next();
                       }
                   })                
               }
           }
       })
   }
   