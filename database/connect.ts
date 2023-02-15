import mongoose from 'mongoose'
import { modelBook } from '../models/model';



mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://${process.env.DATABASE}`)
    .then(() => console.log('COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONect'))
    .catch(error => console.log(error))
    
    
export default function createData() {
    const book = new modelBook ({
        title:'20 Milles lieux sous la merde',
        author:"Jules Verges",
        available:true,
        self_service_id:"string",
    })
    book.save()
}
