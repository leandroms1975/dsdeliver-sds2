import { useEffect, useState } from 'react';
import './styles.css';
import { ReactComponent as Logo, ReactComponent } from './logo.svg';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { Product } from './Types';
import { fetchProducts } from './api';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        console.log('componete orders iniciou')
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error));
    
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;