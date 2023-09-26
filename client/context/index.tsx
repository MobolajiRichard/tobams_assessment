// MyContext.tsx

import { createContext, useContext, ReactNode, Dispatch, SetStateAction, useState } from 'react';
import { ProductListProp } from '../types';

interface ProductContextType {
  selectedProducts: ProductListProp[];
  setSelectedProducts: Dispatch<SetStateAction<ProductListProp[]>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState<ProductListProp[]>([]);

  return (
    <ProductContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a MyProvider');
  }
  return context;
};
