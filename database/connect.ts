import mongoose from 'mongoose'



mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://${process.env.DATABASE}`)
    .then(() => console.log('COOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONect'))
    .catch(error => console.log(error))




// const book = new bookModel ({
//     title:'20 Milles lieux sous la merde',
//     author:"Jules Verges",
//     available:true,
//     self_service_id:"string",
// })
// await book.save()