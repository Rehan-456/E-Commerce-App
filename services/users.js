import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(),"data","users.json")



export function getAll(){
    const data =fs.readFileSync(filePath)
    return JSON.parse(data)
}
export function getByEmail(email){
    const data = getAll()
    return data.find(user => user.email.toLowerCase() === email.toLowerCase())
}

export async function save (email,password) {
    const user = getByEmail(email)
    if (user) {
        // throw new Error("Please fill out all the requirements");
        return res.status(422).json({error:"User Already Exist"})
    }
    else{
    const data = getAll();
    data.push({
        id: data.length + 1,
        email,password
        
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
    }
    
}