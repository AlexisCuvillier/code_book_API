import mongoose from 'mongoose'

const self_service_schema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
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
    self_service_id: [{self_service_schema}],
    user_id: String
});

export const modelBook = mongoose.model("Book", schemaBook, "book's");




