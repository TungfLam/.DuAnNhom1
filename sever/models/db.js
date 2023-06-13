const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/testdatabaseDUANNHOM1',{useNewUrlParser:true,useUnifiedTopology:true}) 

mongoose.connect('mongodb+srv://saoooo2pro:saoooo2pro@databasenhom1.p8zny2e.mongodb.net/databaseNhom1?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}) 
.then(()=>{
    console.log("KET NOI MONGO ONLINE THANH CONG");
})    
.catch((err) => {
        console.log('loi ket noi CSDL');
        console.log(err);
    });

module.exports = { mongoose };
//mongodb+srv://saoooo2pro:1WA4zP1gtAiL4fA1@databasenhom1.p8zny2e.mongodb.net/?retryWrites=true&w=majority/databaseNhom1


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/testdatabaseDUANNHOM1')// 
//     .catch((err) => {
//         console.log('loi ket noi CSDL');
//         console.log(err);
//     });

// module.exports = { mongoose };
// //mongodb+srv://saoooo2pro:1WA4zP1gtAiL4fA1@databasenhom1.p8zny2e.mongodb.net/?retryWrites=true&w=majority/databaseNhom1