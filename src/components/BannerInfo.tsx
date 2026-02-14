import { icons } from "@/assets/icons";

const BannerInfo = () => {
    return (
        <div>
            <h2>Наши байки разработаны для работы в доставке</h2>
            <div>
                <div>
                    <icons.battery />
                    <span>Заряда батареи хватает на 75км</span>
                </div>
            </div>
        </div>
    );
};

export default BannerInfo;