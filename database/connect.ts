import mongoose from 'mongoose'
import { modelBook, modelSelfService } from '../models/model';



mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://${process.env.DATABASE}`)
    .then(() => console.log('COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONect'))
    .catch(error => console.log(error))
    
    
export default function createData() {
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

