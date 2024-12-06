import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ShirtList() {
  const [shirts, setShirts] = useState([]);
  const [newShirt, setNewShirt] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  useEffect(() => {
    axios.get('/api/shirts')
      .then(response => {
        setShirts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the shirts!", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewShirt((prevShirt) => ({
      ...prevShirt,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/shirts', newShirt)
      .then(response => {
        setShirts((prevShirts) => [...prevShirts, response.data]);
        setNewShirt({
          name: '',
          description: '',
          price: '',
          imageUrl: '',
        });
      })
      .catch(error => {
        console.error("There was an error adding the shirt!", error);
      });
  };

  return (
    <div>
      <h2>Shirt Management</h2>

      {/* Cuestionario para añadir productos */}
      <form onSubmit={handleSubmit}>
        <h3>Añadir nueva camiseta</h3>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={newShirt.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={newShirt.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={newShirt.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>URL de la imagen:</label>
          <input
            type="text"
            name="imageUrl"
            value={newShirt.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Añadir Producto</button>
      </form>

      {/* Mostrar productos en tarjetas */}
      <h3>Productos</h3>
      <div className="product-cards">
        {shirts.map((shirt) => (
          <div key={shirt.id} className="product-card">
            <img src={shirt.imageUrl} alt={shirt.name} />
            <h3>{shirt.name}</h3>
            <p>{shirt.description}</p>
            <p>Precio: ${shirt.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShirtList;
