import Image from 'next/image'
import Link from 'next/link'
 
export default function Card({products}){
    const productList = products.map(product => {
        return (
          <div className="row" key={product.id}>
            <div className="col s12 m7">
              <div className="card pcard">
                <div className="card-image">
                  <Image
                    src={product.mediaUrl}
                    width={1000}
                    height={1000}
                  />
                  <span className="card-title">{product.name}</span>
                </div>
                <div className="card-content">
                  <p>{product.price}</p>
                </div>
                <div className="card-action">
                  <Link href={'/product/[id]'} as = {`/product/${product.id}`}>Product Description</Link>
                </div>
              </div>
            </div>
          </div>
            )
        })
    return productList
}