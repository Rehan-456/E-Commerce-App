import { deleteById, getById } from "@/services/products"

export default function handler(req,res){
    const {pid} = req.query
    console.log(pid)
   if(req.method === 'DELETE'){
    deleteById(pid)
    return res.status(200).json({})
   }
    const product = getById(pid)
    console.log(product)
    return res.status(200).json(product)
 }