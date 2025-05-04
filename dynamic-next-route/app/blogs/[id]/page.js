import { products } from "@/app/db/data"

const SingleBlog = ({params}) => {
    const findBlog=products.filter(product=>product.id===parseInt(params.id))
    const {name,category,price}=findBlog[0];
  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold">Product Name:{name}</h1>
      <p className="text-2xl">Price:{price}</p>
      <span>category:{category}</span>
    </div>
  )
}

export default SingleBlog
