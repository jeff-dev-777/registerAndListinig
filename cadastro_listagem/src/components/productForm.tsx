import React, { useState } from 'react';

interface ProductFormState {
  productName: string;
  productDescription: string;
  productValue: string;
  availableForSale: boolean;
}

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormState>({
    productName: '',
    productDescription: '',
    productValue: '',
    availableForSale: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value, type,} = event.target;
    const inputValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;
    setFormData(prevState => ({
        ...prevState,
        [name]: inputValue,
      }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Formulario:', formData);
    // enviar os dados do formulário para o servidor
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome do Produto:
          <input type="text" name="productName" value={formData.productName} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Descrição do Produto:
          <input type="text" name="productDescription" value={formData.productDescription} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Valor do Produto:
          <input type="text" name="productValue" value={formData.productValue} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Disponível para Venda:
          <select name="availableForSale" value={formData.availableForSale.toString()} onChange={handleInputChange}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ProductForm;

