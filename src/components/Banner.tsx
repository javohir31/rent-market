import BannerRecom from "./BannerRecom"
import Products from "./Products"


const Banner = () => {
    return (
        <section>
            <div className="container">
                <BannerRecom />
                <Products />
            </div>
        </section>
    )
}

export default Banner