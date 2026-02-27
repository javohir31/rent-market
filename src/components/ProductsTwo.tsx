import { CardOneObject } from "@/data"
import ProductCard from "./ProductCard"

const ProductsTwo = (props: { title: string }) => {

    const { title  } = props

    return (
        <div className="pt-10">
            <h2 className="text-4xl font-bold text-[#222222]">{title}</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    CardOneObject.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsTwo