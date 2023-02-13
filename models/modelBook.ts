import mongoose from 'mongoose'


const schemaBook = new mongoose.Schema({
    title: String,
    author: String,
    available: Boolean,
    self_service_id: String,

});

export const modelBook = mongoose.model("Book", schemaBook, "book's");
