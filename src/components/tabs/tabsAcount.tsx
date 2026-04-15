import { useState, ChangeEvent, FormEvent } from 'react'

interface FormState {
    firstName: string
    lastName: string
    displayName: string
    email: string
    currentPassword: string
    newPassword: string
    confirmPassword: string
}

const AcountTabs = () => {
    const [formData, setFormData] = useState<FormState>({
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    })

    // Tugmani faollashtirish uchun tekshiruv: 
    // Kamida bitta maydon to'ldirilganligini tekshiramiz
    const isFormFilled = Object.values(formData).some((value) => value.trim() !== '')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form Data:', formData)
        alert("Ma'lumotlar saqlandi!")
    }

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Inputlar uchun qayta ishlatiladigan yondashuv */}
                {[
                    { label: 'Имя*', name: 'firstName', placeholder: 'Eleanor' },
                    { label: 'Фамилия*', name: 'lastName', placeholder: 'Pena' },
                    { label: 'Отображаемое имя*', name: 'displayName', placeholder: 'Admin' },
                    { label: 'Почта*', name: 'email', placeholder: 'Eleanorpena@gmail.com', type: 'email' },
                ].map((field) => (
                    <div key={field.name}>
                        <label className="block text-sm font-medium mb-2">{field.label}</label>
                        <input
                            type={field.type || 'text'}
                            name={field.name}
                            value={formData[field.name as keyof FormState]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                ))}
            </div>

            <div className="mb-8">
                <div className="text-base font-semibold mb-4">Смена пароля</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['currentPassword', 'newPassword', 'confirmPassword'].map((name) => (
                        <div key={name}>
                            <label className="block text-sm font-medium mb-2 capitalize">
                                {name === 'currentPassword' ? 'Текущий пароль' : name === 'newPassword' ? 'Новый пароль' : 'Подтвердите'}
                            </label>
                            <input
                                type="password"
                                name={name}
                                value={formData[name as keyof FormState]}
                                onChange={handleChange}
                                className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={!isFormFilled}
                    className={`px-8 py-3 rounded-lg font-medium transition ${
                        isFormFilled
                            ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    Сохранить
                </button>
            </div>
        </form>
    )
}
// asdad

export default AcountTabs