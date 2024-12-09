import React from 'react'
import '../assets/style/ProductCard.css';


const ProductCard = () => {

  // 仮の商品データ
    const products = [
        { id: 1, name: '商品1', price: '¥1000' },
        { id: 2, name: '商品2', price: '¥2000' },
        { id: 3, name: '商品3', price: '¥3000' },
        { id: 4, name: '商品4', price: '¥4000' },
        { id: 5, name: '商品5', price: '¥5000' },
        { id: 6, name: '商品6', price: '¥6000' },
    ];

    return (
        <div className="products">
            {products.map((product) => (
            <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
    ))}

    </div>
    )
}

export default ProductCard