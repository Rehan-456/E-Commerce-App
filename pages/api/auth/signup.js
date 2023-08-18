import { save } from "@/services/users"

export default function handler(req,res){
    if (req.method !== 'POST'){
       return res.status(404).send()
      }
    const {email,password} = req.body
    save(email,password)
    res.status(201).send()  
 }