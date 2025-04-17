import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ItemDetailContainer.css";

const allProducts = {
  "a1": { id: "a1", name: "Acuarelas", description: "Set completo de acuarelas profesionales.", price: 15.99, image: "/images/acuarela.png", category: 'artistica' },
  "a2": { id: "a2", name: "Barnices", description: "Barniz brillante para protección.", price: 8.50, image: "/images/barniz.jpg", category: 'artistica' },
  "a3": { id: "a3", name: "Espátulas", description: "Espátulas de madera resistentes.", price: 4.99, image: "/images/espatulas.jpg", category: 'artistica' },
  "a4": { id: "a4", name: "Pintura", description: "Pintura acrílica en varias tonalidades.", price: 12.75, image: "/images/acrilico.png", category: 'artistica' },
  "a5": { id: "a5", name: "Paletas", description: "Paletas plásticas reutilizables.", price: 3.50, image: "/images/paleta.png", category: 'artistica' },
  "a6": { id: "a6", name: "Rodillos", description: "Rodillos para paredes y murales.", price: 6.80, image: "/images/rodillo.png", category: 'artistica' },
  "c1": { id: 'c1', name: 'Cuadernos', description: 'Cuadernos escolares tamaño A4.', price: 5.99, image: '/images/cuaderno.jpg', category: 'comercial' },
  "c2": { id: 'c2', name: 'Abrochadoras', description: 'Abrochadora metálica.', price: 7.25, image: '/images/abrochadora.jpg', category: 'comercial' },
  "c3": { id: 'c3', name: 'Agujereadoras', description: 'Agujereadora eléctrica.', price: 18.500, image: '/images/agujereadora.jpg', category: 'comercial' },
  "c4": { id: 'c4', name: 'Bolígrafos', description: 'Bolígrafos colores.', price: 7.800, image: '/images/boligrafos.png', category: 'comercial' },
  "c5": { id: 'c5', name: 'Resaltadores', description: 'Resaltadores fluorescentes.', price: 2.50, image: '/images/resaltadores.jpg', category: 'comercial' },
  "c6": { id: 'c6', name: 'Tijeras', description: 'Tijeras escolares.', price: 3.80, image: '/images/tijera.jpg', category: 'comercial' },
  "e1": { id: 'e1', name: 'Crayones', description: 'Crayones coloridos.', price: 4.50, image: '/images/crayones.jpg', category: 'escolar' },
  "e2": { id: 'e2', name: 'Carpetas', description: 'Carpetas plásticas.', price: 3.99, image: '/images/carpeta.jpg', category: 'escolar' },
  "e3": { id: 'e3', name: 'Etiquetas', description: 'Etiquetas adhesivas.', price: 1.50, image: '/images/etiquetas.jpg', category: 'escolar' },
  "e4": { id: 'e4', name: 'Sacapuntas', description: 'Sacapuntas.', price: 2.00, image: '/images/Sacapuntas.png', category: 'escolar' },
  "e5": { id: 'e5', name: 'Lápices de Colores', description: 'Lápices profesionales.', price: 6.99, image: '/images/lapices-colores.jpg', category: 'escolar' }
};

function ItemDetailContainer() {

 const { productId } = useParams();
 const [product, setProduct] = useState(null);
 const [quantity, setQuantity] = useState(1);

useEffect(() => {
 new Promise((resolve) => setTimeout(() => resolve(allProducts),500))
 .then((data) => {
   if (productId) setProduct(data[productId]);
 });
}, [productId]);

if (!product) return (<p>Cargando detalles...</p>);

const handleAddToCart = () => alert(`Se agregaron ${quantity} unidades de ${product.name} al carrito.`);

return (
<div className='item-detail-container'>
<h2>{product.name}</h2>
<img src={product.image} alt={product.name} className='product-image' />

<p>{product.description}</p>

<p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>

<div className='quantity-controls'>
<button onClick={() => setQuantity(q=>Math.max(1,q-1))}>-</button>
<span>{quantity}</span>
<button onClick={() => setQuantity(q=>q+1)}>+</button>
</div>

<button className='add-to-cart-button' onClick={handleAddToCart}>Agregar al carrito</button>

</div>);
}

export default ItemDetailContainer;