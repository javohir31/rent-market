import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardOneObject } from '@/data'
import { Gift } from 'lucide-react'

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const product = CardOneObject.find((p) => p.id === Number(id))

  const [mainImage, setMainImage] = useState(product?.img || '')
  const [rentalPeriod, setRentalPeriod] = useState<'week' | 'month'>('week')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return <div className="p-10 text-center">Товар не найден</div>
  }

  const changeQty = (delta: number) => {
    setQuantity((q) => Math.max(1, q + delta))
  }

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left side: thumbnails + main image */}
        <div className="flex gap-8">
          {/* thumbnails column */}
          <div className="flex flex-col gap-4">
            {[product.img, product.img, product.img, product.img].map((src, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(src)}
                className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-transparent hover:border-gray-300"
              >
                <img src={src} alt={product.title} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
          {/* main image container */}
          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-3xl">
            <img src={mainImage} alt={product.title} className="max-h-[500px] object-contain" />
          </div>
        </div>

        {/* Right side: product info */}
        <div className="space-y-6">
          {/* badge above title */}
          <span className="text-sm text-gray-500">Более 70 заказов</span>
          <h1 className="text-3xl font-bold">{product.title}</h1>

          {/* rental toggle */}
          <div className="flex items-center gap-2 bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setRentalPeriod('week')}
              className={`px-6 py-2 rounded-full text-sm font-medium ${rentalPeriod === 'week' ? 'bg-gray-800 text-white' : 'text-gray-800'}`}
            >
              Неделя
            </button>
            <button
              onClick={() => setRentalPeriod('month')}
              className={`px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1 ${rentalPeriod === 'month' ? 'bg-gray-800 text-white' : 'text-gray-800'}`}
            >
              Месяц <Gift size={16} />
            </button>
          </div>

          {/* quantity selector */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => changeQty(-1)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={() => changeQty(1)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
            >
              +
            </button>
          </div>

          {/* price */}
          <div className="text-4xl font-extrabold">
            {product.currentPrice}
          </div>

          {/* actions */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex-1 border border-green-500 text-green-500 py-4 rounded-2xl font-bold uppercase hover:bg-green-50">
              В корзину
            </button>
            <button className="flex-1 bg-white border border-gray-300 text-gray-800 py-4 rounded-2xl font-bold uppercase hover:bg-gray-100">
              Купить сейчас
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetailPage
