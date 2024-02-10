"use client"
import { useRouter } from "next/navigation";

type ProductProps = {
  params: {
    productId: string
  }
}

export default function CurrentProduct({params}: ProductProps) {
  const router = useRouter();
  return (
    <>
      <h1>Product {params.productId} info</h1>
      <button onClick={() => router.push('/products')}>Back</button>
    </>
  )
}