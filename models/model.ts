import mongoose from 'mongoose'

const self_service_schema = new mongoose.Schema(
    {
        location: String,
        address :  String,
        zip_code : Number,
    }
);

export const modelSelfService = mongoose.model("selfService", self_service_schema, 'selfServices')

const schemaBook = new mongoose.Schema({
    title: String,
    author: String,
    available: Boolean,
    borrow_date: Date,
    self_service_id: String,
    user_id: String
});

export const modelBook = mongoose.model("Book", schemaBook, "book's");




