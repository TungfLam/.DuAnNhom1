const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/testdatabaseDUANNHOM1',{useNewUrlParser:true,useUnifiedTopology:true}) 

mongoose.connect('mongodb+srv://saoooo2pro:saoooo2pro@databasenhom1.p8zny2e.mongodb.net/databaseNhom1?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}) 
.then(()=>{
    console.log("CONNECT MONGODB ONLINE SUCCESSFULLY");
})    
.catch((err) => {
        console.log('loi ket noi CSDL');
        console.log(err);
    });

module.exports = { mongoose };