import Link from "next/link"

interface Product {
  name: string
  price: number
  isOnSale: boolean
}

export default function Page() {
  const products: Product[] = [
    { name: "Apples", price: 50, isOnSale: false },
    { name: "Bananas", price: 100, isOnSale: true },
  ]

  return (
    <main>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.name}>
              <Link href={`/product/${product.name}`}> {product.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
