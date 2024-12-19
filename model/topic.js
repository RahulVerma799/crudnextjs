import mongoose from 'mongoose';
import {Schema,model,models} from 'mongoose'

const topicSchema=new Schema({
    title:{
        type:String,
        requried:true,
    },

    description:{
        type:String,
        requried:true,
    }
},{timestamps:true}
);

const Topic=models.Topic||mongoose.model("Topic",topicSchema);

export default Topic;