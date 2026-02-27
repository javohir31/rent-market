import { Filter, Star } from "lucide-react"
import ProductCard from "../components/ProductCard"
import { CardOneObject } from "@/data"

const Catalog = () => {
    const products = CardOneObject

    return (
        <div className="px-4 py-6">
            {/* Header */}
            <header className="container mb-8">
                <h1 className="text-3xl font-bold text-[#1F1F1F] flex items-baseline gap-2">
                    Каталог
                    <span className="text-base font-normal text-gray-600">
                        (124 Товар)
                    </span>
                </h1>
                <div className="container mt-4 flex flex-wrap gap-3 justify-between items-center">
                    <button className="mt-2 flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                        <Filter size={16} />
                        Фильтр
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                        <Star size={16} />
                        Популярные
                    </button>
                </div>
            </header>

            {/* Product grid */}
            <main>
                <div className="container">
                    <div className="mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((p) => (
                                <ProductCard key={p.id} {...p} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Catalog
