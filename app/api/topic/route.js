import { connectDb } from "@/Lib/Db";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";

export const POST=async(req)=>{
    try{
    const {title,description}=await req.json();
    await connectDb();

    if(!title||!description){
        return new NextResponse(JSON.stringify({message:'all field requireed'},{status:400}))
    }

    await Topic.create({title,description});
    return new NextResponse(JSON.stringify({
        message:"Topc craeted successfully",

    },{status:200}))
}
catch(error){
    console.log(error);
    return new NextResponse(JSON.stringify({message:"topic is not craeted"+error},{status:500}))
}
}

export const GET=async(req)=>{
    try{
        await connectDb();
        const topic=await Topic.find();
        return new NextResponse(JSON.stringify({topic}))

    }
    catch(error){
        return new NextResponse(JSON.stringify({
            message:'error in get data'
        },{status:500}))

    }
}

export const DELETE=async(req)=>{
    try{
        await connectDb();
        const id=await req.nextUrl.searchParams.get('id');
        await Topic.findByIdAndDelete(id);
        return new NextResponse(JSON.stringify({message:"delete the id successfullt"},{status:200}))

    }
    catch(error){
        console.log(error);
    return new NextResponse(JSON.stringify({
        message:'delete the message'
    },{status:500}))
    }
}

export const PUT=async(req,{params})=>{
    try{
        const id=await req.nextUrl.searchParams.get('id')
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