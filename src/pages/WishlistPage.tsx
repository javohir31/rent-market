import { useFavorites, type Product } from '../../FavoritesContext';
import ProductCard from '../components/ProductCard';

const WishlistPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-[#1F1F1F] mb-8">Список желаний</h1>
      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">Ma'lumot topilmadi</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              rentalText={product.rentalText}
              iconImgOne={product.iconImgOne}
              iconImgTwo={product.iconImgTwo}
              iconImgThree={product.iconImgThree}
              iconLabels={product.iconLabels}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;