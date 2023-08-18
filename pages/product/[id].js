import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function Product({ product }) {

  const modalRef = useRef(null)
  useEffect(() => {
    M.Modal.init(modalRef.current)
  },[])
  const getModal = () => {
    return (
      <div id="modal1" className="modal" ref={modalRef}>
        <div className="modal-content">
          <h4>{product.name}</h4>
          <p>Are you sure you want to delete this product?</p>
        </div>
        <div className="modal-footer">
          <button className="btn #e53935 red darken-1" onClick={()=> deleteProduct()}>Delete
          </button>
          <button className="btn waves-effect waves-light">Cancel
          </button>
        </div>
      </div>
    )
  }
  const deleteProduct = async () =>{
   const res = await fetch(`http://localhost:3000/api/products/${product.id}`,{
    method : 'DELETE'
   })
   await res.json()
   router.push('/', { scroll: false })
  }
  return (
    <div className="container center-align productInput">
      <h1>{product.name}</h1>
      <div className='img'><Image
        src={product.mediaUrl}
        width={400}
        height={500}
        alt="Mobile Phone"
      /></div>

      <h3>{product.price}</h3>
      <input type='number' className='space' placeholder='Quantity' min='1' />

      <button className="btn waves-effect waves-light">ADD
        <i className="material-icons right">add</i>
      </button>
      <p className='space'>{product.discription}</p>
      <button data-target="modal1" className="btn modal-trigger #e53935 red darken-1">DELETE
        <i className="material-icons right">delete</i>
      </button>
      {getModal()}

    </div>
  )
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      // {
      //   params: {
      //     id: '2',
      //   },
      // }, // See the "paths" section below
    ],
    fallback: "blocking", // false or "blocking"
  }
}

export async function getStaticProps({ params: { id } }) {

  const res = await fetch(`http://localhost:3000/api/products/${id}`)
  const data = await res.json()
  return {
    props: {
      product: data
    },
  }
}