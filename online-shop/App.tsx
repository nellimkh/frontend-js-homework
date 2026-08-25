import { useState } from "react";
import { Basket } from "./components/Basket";
import { ProductList } from "./components/ProductList";
import type { BasketItem, Product } from "./helpers/types";

export default function App() {
  const [showBasket, setShowBasket] = useState(false)
  const [products] = useState<Product[]>([
    { id: 101, name: "Puma Rs-X1", price: 80, picture: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/369449/31/sv01/fnd/SEA/fmt/png/RS-X-Toys-Trainers" },
    { id: 102, name: "Puma Rs-X3", price: 40, picture: "https://img2.ans-media.com/i/840x1260/AW24-OBM14L-99A_F1.webp?v=1738055654" },
    { id: 103, name: "Puma Rs-X2", price: 50, picture: "https://www.tradeinn.com/f/13760/137609507/puma-rs-x-winterized-trainers.webp" },
    { id: 104, name: "Puma Rs-X4", price: 120, picture: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/369449/27/sv01/fnd/PNA/fmt/png/RS-X-Toys-Men's-Sneakers" },
    { id: 105, name: "Puma Rs-X5", price: 90, picture: "https://fas-bee.com/cdn/shop/files/PU630BM089376_001.jpg?v=1748313961" },
    { id: 106, name: "Puma Rs-X6", price: 110, picture: "https://www.sneakerjagers.com/_next/image?url=https%3A%2F%2Fstatic.clickwire.io%2F87950%2Fpuma-rs-x.jpg&w=3840&q=100" },
  ])

  const [basket, setBasket] = useState<BasketItem[]>([
  ])
  const moveToCart = (product: Product): void => {
    setShowBasket(true)

    const exist = basket.find(item => item.id == product.id)

    if (!exist) {
      return setBasket([...basket, { ...product, quantity: 1 }])
    }

    exist.quantity++
    setBasket([...basket])


  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mx-auto px-2 py-8">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">Online Shop</h1>
        <button onClick={() => setShowBasket(!showBasket)} className="bg-blue-500 p-3 rounded-md text-white text-2xl mx-5">show {showBasket ? "products" : "basket"}</button>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {
            showBasket ? <div className="lg:col-span-1">
              <Basket
                items={basket}
              />
            </div> : <div className="lg:col-span-3">
              <ProductList
                products={products}
                onMove={moveToCart}
              />
            </div>

          }

        </div>
      </div>
    </div>
  )
}