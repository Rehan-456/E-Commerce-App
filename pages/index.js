import Card from '@/components/card'
export default function Home({ products }) {

  return (
    <div className='rootcard'>
      <Card products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return {
    props: {
      products: data
    }
  }
}