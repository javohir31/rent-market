import { Phone } from "lucide-react"


const Header = () => {
  return (
    <header className="bg-[#]">
        <div className="container">
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
        </div>
    </header>
  )
}

export default Header