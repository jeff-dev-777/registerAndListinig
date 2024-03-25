import React, { useState, useEffect } from 'react';

interface Product {
  productName: string;
  productValue: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Simular dados iniciais ou busca de dados no servidor
  useEffect(() => {
    //buscar os produtos do servidor
    const initialProducts: Product[] = [
      { productName: 'produto A', productValue: '10.00' },
      { productName: 'Produto B', productValue: '20.00' },
      { productName: 'Produto C', productValue: '15.00' },
    ];
    setProducts(initialProducts);
  }, []);

  // Função para cadastrar um novo produto
  const handleAddProduct = () => {
    // formulário de cadastro de produto
    console.log(products);
  };

  return (
    <div>
      <h2>Listagem de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {products
            .sort((a, b) => parseFloat(a.productValue) - parseFloat(b.productValue))
            .map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.productValue}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={handleAddProduct}>Cadastrar Novo Produto</button>
    </div>
  );
};

export default ProductList;
