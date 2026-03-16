import { icons } from "@/assets/icons"
const BannerRecom = () => {
    return (
        <div className="flex  justify-between bg-white rounded-3xl mt-9 px-8 py-5 sm:max-w-160 w-full mt-6 px7 py-5">
            <div className="flex flex-col max-w-[392px] w-full sm:max-w-75 w-full">
                <h2 className="text-4xl my-6 font-bold sm:text-3xl my-5.5">Аренда девайсов по выгодным ценам</h2>
                <p className="text-[1rem] text-[#222222] font-normal">без залогов и забот о ремонте</p>
                <button className="text-white px-16 py-4 text-[1rem] font-bold bg-[#1F1F1F] rounded-[2.25rem] mt-28 sm:px-12 py-3 etext-[0.875rem]">Смотреть каталог</button>
            </div>
            <icons.greenBanner className="w-1/2 h-full" />
        </div>
    )
}

export default BannerRecom