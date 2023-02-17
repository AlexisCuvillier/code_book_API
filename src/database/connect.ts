import mongoose from 'mongoose'
import { modelBook, modelSelfService } from '../models/model'
import * as dotenv from 'dotenv'

dotenv.config({path: `./.env.${process.env.NODE_ENV}`})

const url = `mongodb+srv://${process.env.DATABASE}`



export const connectDb = async () => {
    console.log(url);
    
    mongoose.set('strictQuery', false)
    mongoose.connect(url)
    .then(() => console.log('COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONect'))
    .catch(error => console.log(error))
}



export const createData = () => {
    const book = new modelBook ({
        title:'20 Milles lieux sous la merde',
        author:"Jules Verges",
        available:true,
        self_service_id:null,
        borrow_date:null,
        user_id: null
    })
    book.save()

    const selfService = new modelSelfService ({
        location: 'Boulogne-sur-mer',
        address: "33 rue de la poupée qaui tousse",
        zip_code:62200
    })

    selfService.save()
}

