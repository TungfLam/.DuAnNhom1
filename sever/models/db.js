const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/testdatabaseDUANNHOM1') 

mongoose.connect('mongodb+srv://saoooo2pro:1WA4zP1gtAiL4fA1@databasenhom1.p8zny2e.mongodb.net/?retryWrites=true&w=majority/databaseNhom1',{
    useNewUrlParser:true,useUnifiedTopology:true
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