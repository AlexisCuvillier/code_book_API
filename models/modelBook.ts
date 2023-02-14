import mongoose from 'mongoose'

const self_service_schema = new mongoose.Schema(
    {
        _id : {
            type : mongoose.Schema.Types.ObjectId,
            unique: true,
            default: () => new mongoose.Types.ObjectId()
        }, 
        emprunt : {
            type : Date,
            required : true
        }, 
        rendu : {
            type : mongoose.Schema.Types.Mixed,
            required : false,
            default: null
        },
        user : {
            type : Number,
            required : true
        }
    }
);



const schemaBook = new mongoose.Schema({
    title: String,
    author: String,
    available: Boolean,
    self_service_id: String,

});

export const modelBook = mongoose.model("Book", schemaBook, "book's");
