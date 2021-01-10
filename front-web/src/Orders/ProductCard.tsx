import { Product } from './Types';

type Props = {
    product: Product;
}

function formatPrice(price: number) {
    const formater = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formater.format(price);
}

function ProductCard({product}: Props) {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri}
            className="order-card-image" 
            alt={product.name}
            />
            <h3 className="order-card-price">
                    {formatPrice(product.price)}
            </h3>
            <div className="order-classe-description">
                <h3>
                    {product.description}
                </h3>
                <p>
                Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.                </p>
            </div>
        </div>
    )
}

export default ProductCard;