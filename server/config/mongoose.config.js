const mongoose = require("mongoose")

const dbName = "authorsDB";


mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`Success! Now connected to the ${dbName} database.`)
    })
    .catch((err)=>{
        console.log(`Fail! There was a problem connecting to ${dbName} database. The error is :`, err)
    })