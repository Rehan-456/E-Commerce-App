import { useState } from "react"

export default function Create() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [media, setMedia] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = async (e) =>{
      e.preventDefault()
      console.log(name,price,media,description)
      const res = await fetch('/api/products',{
        method :"POST",
        headers:{
        'Content-Type':'application/json'
        },
        body: JSON.stringify({
          name,
          price,
          mediaUrl : media,
          description
        })
      })
    //   const data = await res.json()
      if(res.ok){
        alert("Product is successfully saved")
      }
    }
    return (
        <form className="container" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="name" placeholder="Name" value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
            <input type="text" name="price" placeholder="Price" value={price}
                onChange={(e) => { setPrice(e.target.value) }}
            />
             <input type="text" name="media" placeholder="ImageURL" value={media}
                onChange={(e) => { setMedia(e.target.value) }}
            />
            {/* <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file"
                        accept="image/*"
                        onChange={(e) => { setMedia(e.target.files[0]) }}
                    />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
              <img className="responsive-img space" src={ media ? URL.createObjectURL(media):""}/>
            </div> */}
            <textarea name="description" placeholder="Description" value={description}
                className="materialize-textarea"
                onChange={(e) => { setDescription(e.target.value) }}
            ></textarea>
            <button className="btn #1565c0 blue darken-3" type="submit" >Submit
                <i className="material-icons right">send</i>
            </button>

        </form>

    )
}
  