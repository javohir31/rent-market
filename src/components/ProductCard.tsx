import { Heart } from "lucide-react"
import bicycle from "@/assets/bicycle.png"
import { icons } from "@/assets/icons"
import type { ProductCardProps } from "./type"


const ProductCard = (props: ProductCardProps) => {

    const { title, price, period, deposit, depositPeriod, speed, seat, brake } = props

    return (
        <div className="bg-white rounded-3xl max-w-[19.1875rem] px-5 py-5 mt-8">
            <div className="flex items-center justify-between mb-3">
                <span>{title}</span>
                <Heart />
            </div>
            <img src={bicycle} alt="bicycle" />
            <div className="mt-7 flex justify-between items-center">
                <div className="flex flex-col  justify-start">
                    <span className="font-semibold text-[1rem]">{price}</span>
                    <span className="text-[0.875rem] font-normal text-[#9C9C9C]">{period}</span>
                </div>
                <div className="flex flex-col justify-start border-l-2 border-[#9C9C9C] pl-10">
                    <span className="font-semibold text-[1rem]">{deposit}</span>
                    <span className="text-[0.875rem] font-normal text-[#9C9C9C]">{depositPeriod}</span>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-around bg-[#F5F5F5] rounded-2xl py-2">
                <div className="flex items-center flex-col text-center">
                    <div className="h-10 flex items-center justify-center mb-3.5">
                        <icons.speed />
                    </div>
                    <span className="text-[0.75rem] text-[#666666] font-normal">{speed}</span>
                </div>
                <div className="flex items-center flex-col text-center">
                    <div className="h-10 flex items-center justify-center mb-3.5">
                        <icons.seat />
                    </div>
                    <span className="text-[0.75rem] text-[#666666] font-normal">{seat}</span>
                </div>
                <div className="flex items-center flex-col text-center">
                    <div className="h-10 flex items-center justify-center mb-3.5">
                        <icons.brake />
                    </div>
                    <span className="text-[0.75rem] text-[#666666] font-normal">{brake}</span>
                </div>
            </div>
            <button className="w-full bg-[#1F1F1F] text-white py-3 font-medium rounded-[0.625rem] mt-4 text-[1.125rem] ">Арендовать</button>
        </div>
    )
}

export default ProductCard