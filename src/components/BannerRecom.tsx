import { icons } from "@/assets/icons"

const BannerRecom = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-3xl mt-9 px-6 py-8 sm:px-8 sm:py-5 w-full">
            
            {/* Matn qismi: 640px gacha markazda, keyin chapda */}
            <div className="flex flex-col max-w-[392px] w-full text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 sm:mb-6">
                    Аренда девайсов по выгодным ценам
                </h2>
                <p className="text-[1rem] text-[#222222] font-normal">
                    без залогов и забот о ремонте
                </p>
                
                {/* Desktop tugmasi: Faqat 640px dan katta ekranlarda chiqadi */}
                <button className="hidden sm:block text-white px-16 py-4 text-[1rem] font-bold bg-[#1F1F1F] rounded-[2.25rem] mt-20 md:mt-28 hover:bg-opacity-90 transition-all">
                    Смотреть каталог
                </button>
            </div>

            {/* Rasm qismi: 640px gacha o'rtada va kattaroq */}
            <div className="w-full sm:w-1/2 flex justify-center items-center my-8 sm:my-0">
                <icons.greenBanner className="w-full h-auto max-w-[260px] sm:max-w-none" />
            </div>

            {/* Mobil tugmasi: Faqat 640px dan kichik ekranlarda (sm gacha) ko'rinadi */}
            <button className="sm: w-full text-white py-4 text-base font-bold bg-[#1F1F1F] rounded-[1.25rem]">
                Смотреть каталог
            </button>
            
        </div>
    )
}

export default BannerRecom