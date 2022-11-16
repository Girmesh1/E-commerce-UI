import React from 'react'
import styledComponents from 'styled-components'
 import { popularproducts } from '../data';
 import Product from './Product';

const Container = styledComponents.div`
display:flex;
padding: 20px;
flex-wrap:wrap;
justify-content:space-between;

 
 `;
const products = () => {
  return ( 
    <Container>
      {popularproducts.map((item)=>( 
          <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default products
