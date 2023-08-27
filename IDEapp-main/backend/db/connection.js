const URL = "mongodb+srv://Admin2:admin1234@mycluster.b7lfje9.mongodb.net/userdb?retryWrites=true&w=majority"
import mongoose from "mongoose";
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connected...');
}).catch(err=>{
    console.log('Error during DB connection', err);
})
export default mongoose;