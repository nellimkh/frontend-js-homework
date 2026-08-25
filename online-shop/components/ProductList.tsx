import type { Product } from "../helpers/types"

type Props = {
    products: Product[]
    onMove: (p: Product) => void
}
export const ProductList: React.FC<Props> = ({ products, onMove }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-12">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        products.map(product =>
                            <div
                                key={product.id}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                            >
                                <div className="relative overflow-hidden bg-slate-200 h-64">
                                    <img
                                        src={product.picture}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-xl font-bold text-blue-600 mb-4">
                                        ${product.price}
                                    </p>
                                    <button onClick={() => onMove(product)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 active:scale-95 transform">
                                        Add to Basket
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}