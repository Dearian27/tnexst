import RouteButton from "@/components/RouteButton";
import { Metadata } from "next";

type ProductProps = {
  params: {
    productId: string
  }
}

export const generateMetadata = async({params}: ProductProps): Promise<Metadata> => {
  const metadata: string = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`description of product ${params.productId}`);
    }, 1000)
  })
  return {
    title: metadata
  }
}

export default function CurrentProduct({params}: ProductProps) {
  return (
    <>
      <h1>Product {params.productId} info</h1>
      <RouteButton route="/products">Back</RouteButton>
    </>
  )
}