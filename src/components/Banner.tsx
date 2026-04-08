import BannerRecom from "./BannerRecom"
import BannerTwo from "./banner-two"
import HowItWorks from "./HowItWorks"
import Products from "./Products"
import BannerInfo from "./BannerInfo"
import express from "@/assets/Express.png"
import bicycleGift from "@/assets/bicyclegift.png"
import ProductsTwo from "./ProductsTwo"
import LocationSection from "./LocationSection"
import PartnersGrid from "./PartnersGrid"
import FAQ from "./FAQ"
import BlogSection from "./BlogSection"
import { blogData } from "../data"


const Banner = () => {
    return (
        <section>
            <div className="container">
                <BannerRecom />
                {/* <BannerTwo /> */}
                {/* <Products title="Велосипеды" />
                <BannerInfo img={express} />
                <Products title="Спортивный тренажеры" />
                <BannerInfo img={bicycleGift} reverse />
                <ProductsTwo title="Гаджеты и другие" />
                <BannerInfo img={express} />
                <HowItWorks />
                <LocationSection />
                <PartnersGrid />
                <FAQ />
                <BlogSection data={blogData} /> */}
            </div>
        </section>
    )
}

export default Banner