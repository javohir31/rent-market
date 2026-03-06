const AcountTabs = () => {
    return (
        <>
            <form>
                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                        <label className="block text-sm font-medium mb-2">Имя*</label>
                        <input
                            type="text"
                            placeholder="Eleanor"
                            className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Фамилия*</label>
                        <input
                            type="text"
                            placeholder="Pena"
                            className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2 flex items-center gap-1">
                            Отображаемое имя*
                            <span className="inline-block text-gray-400 cursor-pointer" title="Информация">
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#E5E7EB" /><text x="8" y="11" textAnchor="middle" fontSize="10" fill="#6B7280">i</text></svg>
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Admin"
                            className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Почта*</label>
                        <input
                            type="email"
                            placeholder="Eleanorpena@gmail.com"
                            className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Change Password Section */}
                <div className="mb-8">
                    <div className="text-base font-semibold mb-4">Смена пароля</div>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Текущий пароль</label>
                            <input
                                type="password"
                                placeholder="Действующий пароль (не заполняйте, чтобы оставить прежний)"
                                className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Новый пароль</label>
                            <input
                                type="password"
                                placeholder="Новый пароль"
                                className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Подтвердите новый пароль</label>
                            <input
                                type="password"
                                placeholder="Подтвердите новый пароль"
                                className="w-full bg-gray-100 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-gray-100 text-gray-400 rounded-lg font-medium cursor-not-allowed"
                        disabled
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </>
    )
}

export default AcountTabs