import { headerIcons, headerLinks } from "@/data"
import { Phone } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { icons } from "@/assets/icons"



const Header = () => {
    return (
        <header className="bg-[#]">
            <div className="container">
                <div>
                    <div className="flex items-center justify-between px-4 py-3 bg-white rounded-b-3xl">
                        <div className="flex gap-1">
                            <Phone />
                            <span>+998 71 200 14 41</span>
                        </div>
                        <select>
                            <option value="ru">Русский</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between px-4 py-5 bg-white rounded-3xl mt-2.5">
                        <Link to="/">
                            <icons.logo />
                        </Link>
                        <nav className="flex items-center justify-between">
                            {headerLinks.map((el) => (
                                <NavLink
                                    key={el.id}
                                    to={el.to}
                                    className={({ isActive }) =>
                                        `mx-2 inline-block transition-transform duration-150 text-[rgba(31,31,31,1)] ${isActive
                                            ? "font-bold text-gray-900"
                                            : "hover:font-bold hover:scale-105"
                                        }`
                                    }
                                >
                                    {el.text}
                                </NavLink>
                            ))}
                        </nav>
                        <div className="flex items-center gap-2.5">
                            {headerIcons.map((el) => {
                                const Icon = el.icon
                                return (
                                    <button key={el.id}>
                                        <Icon />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header