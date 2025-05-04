import Link from "next/link";
import Blog from "../components/Blog";
import { products } from "../db/data"

export default function Blogs() {
    const items=products;
  return (
    <div>
        <h1>Blogs Items</h1>
      {
        items.map(item=>
            <Link href={`blogs/${item.id}`} key={item.id}><Blog  item={item}/></Link>
            
        )
      }
    </div>
  )
}
