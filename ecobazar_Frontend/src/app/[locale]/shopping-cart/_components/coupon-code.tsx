

const CouponCode = () => {
    return (
        <div>
            <div className="border border-gray-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white shadow-sm">
                <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
                    <span className="text-gray-900 font-semibold text-base whitespace-nowrap">
                        Coupon Code
                    </span>
                    <input
                        type="text"
                        placeholder="Enter code"
                        className="w-full px-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-emerald-500"
                    />
                </div>
                <button
                    type="button"
                    className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm rounded-full transition-colors whitespace-nowrap"
                >
                    Apply Coupon
                </button>
            </div>
        </div>
    )
}

export default CouponCode