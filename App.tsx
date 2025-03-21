import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import type { Product, CartItem } from './types';

// Sample data - replace with your actual data later
const sampleProducts: Product[] = [
  {
    id: '1',
    name: '1800s European Map',
    description: 'Detailed map of Europe from the 19th century',
    price: 299.99,
    category: 'Maps',
    imageUrl: 'https://images.unsplash.com/photo-1582573732277-c5444fa37391',
    inStock: true,
    dateAdded: '2024-03-20'
  },
  // Add more sample products here
];

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return currentCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentCart, { product, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={() => setShowCart(!showCart)}
      />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-12">WorldMapX Collection</h1>
        <ProductGrid 
          products={sampleProducts}
          onAddToCart={handleAddToCart}
        />
      </main>
    </div>
  );
}

export default App;