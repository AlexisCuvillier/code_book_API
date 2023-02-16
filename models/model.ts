import { Document, model, Schema } from 'mongoose';
// import mongoose from 'mongoose'

// const self_service_schema = new mongoose.Schema(
//     {
//         location: String,
//         address :  String,
//         zip_code : Number,
//     }
// );

// export const modelSelfService = mongoose.model("selfService", self_service_schema, 'selfservice')

// const schemaBook = new mongoose.Schema({
//     title: String,
//     author: String,
//     available: Boolean,
//     borrow_date: Date,
//     self_service_id: {type: mongoose.Schema.Types.ObjectId, ref: "selfservice"},
//     user_id: String
// });

// export const modelBook = mongoose.model("Book", schemaBook, "book");


export type TBook = {
    title: string,
    author: string,
    available: boolean,
    borrow_date: Date,
    self_service_id: string,
    user_id: string
}

export type TSelfPointService = {
        location: string,
        address :  string,
        zip_code : number,
}


export interface IBook extends TBook , Document{};

export interface ISelfPointService extends TSelfPointService,Document{};


const schemaBook = new Schema({
    title: {type: String},
    author: {type:String},
    available: {type:Boolean},
    borrow_date: {type:Date},
    self_service_id: {type: Schema.Types.ObjectId, ref: "selfservice"},
    user_id: {type:String}
})


const schemaSelfPoint = new Schema ({
    location: {type:String},
    address :  {type:String},
    zip_code : {type:Number},
})


export const modelBook = model<IBook>('book',schemaBook)

export const modelSelfService = model<ISelfPointService>('selfservice',schemaSelfPoint)