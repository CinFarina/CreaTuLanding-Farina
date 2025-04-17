import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';

const allProducts = [
  // Artística
  { id: 'a1', name: 'Acuarelas', description: 'Set de acuarelas vibrantes.', price: 15.99, category: 'artistica', image: '/images/acuarela.png' },
  { id: 'a2', name: 'Barnices', description: 'Barniz brillante para pinturas.', price: 8.50, category: 'artistica', image: '/images/barniz.jpg' },
  { id: 'a3', name: 'Espátulas', description: 'Espátulas de diferentes tamaños.', price: 4.99, category: 'artistica', image: '/images/espatulas.jpg' },
  { id: 'a4', name: 'Pintura', description: 'Pintura acrílica de alta calidad.', price: 12.75, category: 'artistica', image: '/images/acrilico.png' },
  { id: 'a5', name: 'Paletas', description: 'Paletas para mezclar colores.', price: 3.50, category: 'artistica', image: '/images/paleta.png' },
  { id: 'a6', name: 'Rodillos', description: 'Rodillos para pintura mural.', price: 6.80, category: 'artistica', image: '/images/rodillo.png' },

  // Comercial
  { id: 'c1', name:'Cuadernos','description':'Cuadernos de tapa dura y papel grueso.','price':5.99,'category':'comercial','image':'/images/cuaderno.jpg'},
  { id:'c2',name:'Abrochadoras','description':'Abrochadora para papeles y documentos.','price':7.25,'category':'comercial','image':'/images/abrochadora.jpg'},
  { id:'c3',name:'Agujereadoras','description':'Agujereadora eléctrica para cartón y papel.','price':18.500,'category':'comercial','image':'/images/agujereadora.jpg'},
  { id:'c4',name:'Bolígrafos','description':'Bolígrafos de colores.','price':7.800,'category':'comercial','image':'/images/boligrafos.jpg'},
  { id:'c5',name:'Resaltadores','description':'Resaltadores fluorescentes en varios colores.','price':2.50,'category':'comercial','image':'/images/resaltadores.jpg'},
  { id:'c6',name:'Tijeras','description':'Tijeras escolares con mango ergonómico.','price':3.80,'category':'comercial','image':'/images/tijera.jpg'},

  // Escolar
  { id:'e1',name:'Crayones','description':'Crayones de colores vibrantes.','price':4.50,'category':'escolar','image':'/images/crayones.jpg'},
  { id:'e2',name:'Carpetas','description':'Carpetas plásticas resistentes.','price':3.99,'category':'escolar','image':'/images/carpeta.jpg'},
  { id:'e3',name:'Etiquetas','description':'Etiquetas adhesivas para libros y cuadernos.','price':1.50,'category':'escolar','image':'/images/etiquetas.jpg'},
  { id:'e4',name:'Sacapuntas','description':'Sacapuntas para lápices grandes y pequeños.','price':2.00,'category':'escolar','image':'/images/Sacapuntas.png'},
  { id:'e5',name:'Lápices de Colores','description':'Lápices de colores profesionales.',price:6.99,'category':'escolar','image':'/images/lapices-colores.jpg'}

];

function ItemListContainer() {
 const { categoryId } = useParams();
 const [products, setProducts] = useState([]);

useEffect(() => {
 new Promise((resolve) => setTimeout(() => resolve(allProducts),500))
 .then((data) => {
   if (categoryId) {
     setProducts(data.filter(p => p.category === categoryId));
   } else {
     setProducts(data);
   }
 });
}, [categoryId]);

return (
<div className='item-list-container'>

<nav className='category-nav'>
<Link to="/">Todos</Link> |{' '}
<Link to="/category/artistica">Artística</Link> |{' '}
<Link to="/category/comercial">Comercial</Link> |{' '}
<Link to="/category/escolar">Escolar</Link>
</nav>

{products.length===0 ? (
<p>Cargando productos...</p>
) : (
<div className='product-grid'>
{products.map(p => (
<div key={p.id} className='product-item'>
<img src={p.image} alt={p.name} className='product-image' />
<h3>{p.name}</h3>
<p>{p.description}</p>
<p><strong>Precio:</strong> ${p.price.toFixed(2)}</p>
<Link to={`/product/${p.id}`}>Ver detalles</Link>
</div>
))}
</div>)}
</div>);
}

export default ItemListContainer;