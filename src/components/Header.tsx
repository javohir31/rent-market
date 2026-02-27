import { headerIcons, headerLinks } from "@/data"
import { Phone } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { icons } from "@/assets/icons"
import { useCart } from "../../CartContext"
import { useFavorites } from "../../FavoritesContext" // Favorites hookini qo'shdik
import { useState } from "react"
import ConsultationModal from "./ConsultationModal"

const Header = () => {
  const { getTotalItems } = useCart()
  const { favorites } = useFavorites() // Saralanganlar soni uchun
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="bg-transparent">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-b-3xl shadow-sm">
          <div className="flex gap-1 items-center text-gray-700">
            <Phone size={18} />
            <span className="text-sm font-medium">+998 71 200 14 41</span>
          </div>
          <select className="text-sm outline-none bg-transparent cursor-pointer font-medium">
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Main Nav Bar */}
        <div className="flex items-center justify-between px-6 py-5 bg-white rounded-3xl mt-2.5 shadow-sm">
          <Link to="/">
            <icons.logo />
          </Link>

          <nav className="hidden md:flex items-center">
            {headerLinks.map((el) => (
              <NavLink
                key={el.id}
                to={el.to}
                className={({ isActive }) =>
                  `mx-3 transition-all duration-200 text-[#1F1F1F] text-sm ${
                    isActive ? "font-bold border-b-2 border-green-500" : "hover:text-green-500"
                  }`
                }
              >
                {el.text}
              </NavLink>
            ))}
          </nav>

          {/* Header Icons */}
          <div className="flex items-center gap-4">
            {headerIcons.map((el) => {
              const Icon = el.icon
              
              // Correct mapping based on actual IDs from @/data:
              // id: 0 = ShoppingBag (Cart)
              // id: 1 = Heart (Favorites) 
              // id: 2 = User (Profile) - Opens modal instead of navigation
              
              // For Profile icon (id: 2), use button instead of Link
              if (el.id === 2) {
                return (
                  <button
                    key={el.id}
                    onClick={() => setIsModalOpen(true)}
                    className="p-1 hover:scale-110 transition-transform outline-none relative"
                  >
                    <Icon />
                  </button>
                )
              }

              // For other icons, use Link navigation
              let linkTo = "/";
              if (el.id === 0) linkTo = "/cart";      // ShoppingBag icon -> Cart page
              if (el.id === 1) linkTo = "/favorites"; // Heart icon -> Favorites page

              return (
                <Link 
                  key={el.id} 
                  to={linkTo} 
                  className="p-1 hover:scale-110 transition-transform outline-none relative"
                >
                  <Icon />
                  
                  {/* Cart badge - only on ShoppingBag icon (id: 0) */}
                  {el.id === 0 && getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white">
                      {getTotalItems()}
                    </span>
                  )}

                  {/* Favorites badge - only on Heart icon (id: 1) */}
                  {el.id === 1 && favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white">
                      {favorites.length}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  )
}

export default Header