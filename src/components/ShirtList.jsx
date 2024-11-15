import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ShirtList() {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    axios.get('/api/shirts')
      .then(response => {
        setShirts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the shirts!", error);
      });
  }, []);

  return (
    <div>
      <h2>Shirts</h2>
      <ul>
        {shirts.map(shirt => (
          <li key={shirt.id}>
            <h3>{shirt.name}</h3>
            <p>{shirt.description}</p>
            <p>Price: ${shirt.price}</p>
            {shirt.imageUrl && <img src={shirt.imageUrl} alt={shirt.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShirtList;
