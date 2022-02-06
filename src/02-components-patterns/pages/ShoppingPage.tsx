
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/interfaces';

const product: Product = {
    id: '1',
    title: 'Coffee Mug - Card'
}
const product2: Product = {
    id: '1',
    title: 'Coffee Mug 2 - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title title="Second Title" />
                    <ProductCard.Buttons />
                </ProductCard>
                
                <ProductCard product={ product2 }>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>

        </div>
    );
};
