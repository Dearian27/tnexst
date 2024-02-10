"use client"
import { useRouter } from "next/navigation";

type ProductProps = {
  params: {
    id: string
  }
}

export default function CurrentProduct({params}: ProductProps) {
  const router = useRouter();
  return (
    <>
      <h1>Product {params.id} info</h1>
      <button onClick={() => router.push('/products')}>Back</button>
    </>
  )
}