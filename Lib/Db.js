import mongoose from 'mongoose';

export const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO||process.env.DATABASE)
        console.log("database connect successfully")
    }catch(error){
        console.log(error);
        console.log("error on connect database")
    }
}

