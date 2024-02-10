'use client'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  const returnHome = () => {
    router.push('/');
  }
  const openProduct = (id: string) => {
    router.push(`/products/${id}`)
  }
  return (
    <>
      <h1>Product page</h1>
        {[1, 2, 3, 4, 5].map((el, index) => {
          console.log(el);
          return <h2 key={el} onClick={() => openProduct(String(el))} style={{cursor: "pointer"}}>Product {el}</h2>
        })}
      <p onClick={returnHome}>go Home</p>
    </>
  )
}