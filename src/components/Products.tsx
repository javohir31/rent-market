import { productCardData } from "@/data"
import ProductCard from "./ProductCard"

const Products = () => {
    return (
        <div className="pt-10">
            <h2 className="text-4xl font-bold text-[#222222]">Велосипеды </h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    productCardData.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products