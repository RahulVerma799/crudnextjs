import { connectDb } from "@/Lib/Db";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";




export const PUT=async(req,context)=>{
    try{
        const {id}=context.params
        const {newTitle:title,newDesc:description}=await req.json();
        await connectDb();
        await Topic.findByIdAndUpdate(id,{title,description})
        return new NextResponse(JSON.stringify({message:"Topic uodated"},{status:200}))



    }
    catch(error){
        console.log(error)
        return new NextResponse(JSON.stringify({message:"Error in update topic"},{status:500}))
    }
}