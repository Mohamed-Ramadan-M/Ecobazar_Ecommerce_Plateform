

const CardTotal = () => {
    return (
            <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Cart Total</h2>

                {/* Subtotal */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100 text-sm">
                    <span className="text-gray-500 font-medium">Subtotal:</span>
                    <span className="font-semibold text-gray-900">$84.00</span>
                </div>

                {/* Shipping */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100 text-sm">
                    <span className="text-gray-500 font-medium">Shipping:</span>
                    <span className="font-semibold text-gray-900">Free</span>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between py-4 text-base">
                    <span className="text-gray-500 font-medium">Total:</span>
                    <span className="font-bold text-gray-900 text-lg">$84.00</span>
                </div>

                {/* Button */}
                <button
                    type="button"
                    className="mt-2 w-full rounded-full bg-[#00b207] hover:bg-[#009e06] text-white py-3.5 text-sm font-semibold transition-colors shadow-sm"
                >
                    Proceed to checkout
                </button>
            </div>
    )
}

export default CardTotal