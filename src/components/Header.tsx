import { headerIcons, headerLinks } from "@/data"
import { Phone, Menu, ChevronDown, X } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useFavorites } from "../context/FavoritesContext" // Favorites hookini qo'shdik
import { useState } from "react"
import ConsultationModal from "./ConsultationModal"

const Header = () => {
  const { getTotalItems } = useCart()
  const { favorites } = useFavorites() // Saralanganlar soni uchun
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-b-3xl shadow-sm">
          <div className="flex gap-1 items-center text-gray-700">
            <Phone size={18} />
            <span className="text-sm font-medium">+998 71 200 14 41</span>
          </div>
          <select
            aria-label="Select language"
            className="text-sm outline-none bg-transparent cursor-pointer font-medium"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Main Nav Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-3xl mt-2.5 shadow-sm">
          <Link to="/" className="flex items-center gap-1">
            <span className="inline-flex px-2 py-1 rounded-full border border-green-500 text-green-600 text-lg font-bold">
              rent
            </span>
            <span className="text-xl font-bold text-[#1F1F1F]">market</span>
          </Link>

          {/* Desktop nav */}
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

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-500"
              onClick={() => setIsModalOpen(false)}
            >
              RU
              <ChevronDown size={16} />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Open mobile menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Header icons desktop */}
          <div className="hidden md:flex items-center gap-4">
            {headerIcons.map((el) => {
              const Icon = el.icon

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

              let linkTo = "/"
              if (el.id === 0) linkTo = "/cart"
              if (el.id === 1) linkTo = "/favorites"

              return (
                <Link
                  key={el.id}
                  to={linkTo}
                  className="p-1 hover:scale-110 transition-transform outline-none relative"
                >
                  <Icon />

                  {el.id === 0 && getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white">
                      {getTotalItems()}
                    </span>
                  )}

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

        {/* Mobile sheet */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
            <div
              className="absolute right-0 top-0 h-full w-64 bg-white p-5 shadow-2xl overflow-y-auto"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-bold">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded hover:bg-gray-100">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {headerLinks.map((el) => (
                  <NavLink
                    key={el.id}
                    to={el.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-medium p-2 rounded-lg ${
                        isActive ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {el.text}
                  </NavLink>
                ))}

                <div className="border-t pt-3 mt-3">
                  {headerIcons.map((el) => {
                    const Icon = el.icon
                    if (el.id === 2) {
                      return (
                        <button
                          key={el.id}
                          onClick={() => {
                            setIsModalOpen(true)
                            setIsMobileMenuOpen(false)
                          }}
                          className="flex items-center gap-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                        >
                          <Icon /> Profile
                        </button>
                      )
                    }

                    let linkTo = "/"
                    if (el.id === 0) linkTo = "/cart"
                    if (el.id === 1) linkTo = "/favorites"

                    return (
                      <Link
                        key={el.id}
                        to={linkTo}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                      >
                        <Icon />
                        {el.id === 0 ? "Cart" : el.id === 1 ? "Favorites" : "Profile"}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

export default Header