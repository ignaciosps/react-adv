
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css'

const product: Product = {
    id: '1',
    title: 'Coffee Mug - Card'
}
const product2: Product = {
    id: '2',
    title: 'Coffee Mug 2 - Card',
    img: './coffee-mug.png'
}
const product3: Product = {
    id: '3',
    title: 'Coffee Mug 3 - Styles',
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

                <ProductCard
                    product={ product }
                    className="bg-dark text-white "
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold" title="Second Title" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>
                
                <ProductCard 
                    product={ product2 }
                    className="bg-dark text-white "
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard 
                    product={ product3 }
                    style={{ backgroundColor: '#70d1F8' }}
                >
                    <ProductImage 
                        style={{ 
                            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)'
                        }}/>
                    <ProductTitle style={{ fontWeight: 'bold' }}/>
                    <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
                </ProductCard>
            </div>

        </div>
    );
};
