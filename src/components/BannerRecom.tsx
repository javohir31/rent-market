import { icons } from "@/assets/icons"

const BannerRecom = () => {
    return (
        /* - flex-col: Mobilda hamma narsa ustma-ust.
           - items-center: Mobilda barcha elementlarni markazga tekislaydi.
           - text-center: Mobilda matnlarni o'rtaga oladi.
           - md:flex-row / md:text-left: Planshet va kompyuterda (768px+) yonma-yon va chapga tekislangan holatga qaytadi.
        */
        <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-[32px] mt-6 px-6 py-10 md:mt-12 md:px-12 md:py-12 max-w-[390px] md:max-w-5xl w-full mx-auto shadow-sm border border-gray-50">
            
            {/* Matn va Tugma qismi */}
            <div className="flex flex-col w-full md:max-w-[55%] items-center md:items-start text-center md:text-left">
                
                <h2 className="text-[30px] leading-tight md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] mb-4">
                    Аренда девайсов <br className="hidden md:block" /> по выгодным цеanam
                </h2>
                
                <p className="text-[16px] md:text-xl text-[#666666] font-medium mb-10">
                    без залогов и забот о ремонте
                </p>

                <button className="w-full md:w-fit text-white px-10 py-4 md:px-14 md:py-5 text-[16px] md:text-lg font-bold bg-[#1A1A1A] rounded-[18px] hover:bg-black transition-all active:scale-95 shadow-lg">
                    Смотреть каталог
                </button>
            </div>

            {/* Rasm qismi: 
                - hidden: Mobilda (768px gacha) rasmni TO'LIQ olib tashlaydi.
                - md:block: Faqat 768px dan katta ekranlarda rasmni ko'rsatadi.
            */}
            <div className="hidden md:block md:w-1/2 flex justify-end items-center">
                <icons.greenBanner className="w-full max-w-[320px] lg: hidden" />
            </div>
        </div>
    )
}

export default BannerRecom;