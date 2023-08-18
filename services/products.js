import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(),"data","products.json")



export function getAll(){
    const data =fs.readFileSync(filePath)
    return JSON.parse(data)
}
export function getById(id){
    const data = getAll()
    return data.find(product => product.id === Number(id))
}
export function deleteById(id) {
    let data = getAll();
    data = data.filter(product => product.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Write updated data back to the file

    return data;
}
export async function save (name, price,mediaUrl,description) {
    if (!name || !price || !mediaUrl || !description) {
        // throw new Error("Please fill out all the requirements");
        return res.status(422).json({error:"Please fill out all the fields"})
    }
    else{
    const data = getAll();
    
    data.push({
        id: data.length + 1,
        name,price,mediaUrl,description
        
    });
    fs.writeFileSync(filePath, JSON.stringify(data));
    }
    
}