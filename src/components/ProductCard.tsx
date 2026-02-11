import { Heart } from "lucide-react"
import bicycle from "@/assets/bicycle.png"
import { icons } from "@/assets/icons"

const ProductCard = () => {
    return (
        <div className="bg-white rounded-3xl max-w-[19.1875rem] px-5 py-5 mt-8">
            <div className="flex items-center justify-between mb-3">
                <span>Велосипед - 26</span>
                <Heart />
            </div>
            <img src={bicycle} alt="bicycle" />
            <div className="mt-7 flex justify-between items-center">
                <div className="flex flex-col  justify-start">
                    <span className="font-semibold text-[1rem]">180 000 сум.</span>
                    <span className="text-[0.875rem] font-normal">Аренда 7 д.</span>
                </div>
                <div className="flex flex-col justify-start">
                    <span className="font-semibold text-[1rem]">400 000 сум.</span>
                    <span className="text-[0.875rem] font-normal">Аренда 1 мес.</span>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-center">
                <div className="flex items-center flex-col">
                    <icons.speed/>
                    <span className="text-[0.75rem] font-normal">Девять скоростей</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard