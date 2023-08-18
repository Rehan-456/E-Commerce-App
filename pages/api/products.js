import { getAll, save } from "@/services/products"


export default function handler(req,res){
   if (req.method === 'GET'){
    const productsData = getAll()
    return res.status(200).json(productsData)
   }
   if (req.method === 'POST'){
      const {name,price,mediaUrl,description} = req.body
      save(name,price,mediaUrl,description)
      res.status(201).send()
     }
}