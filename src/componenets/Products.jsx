import React from 'react'
import styledComponents from 'styled-components'
 import { popularproducts } from '../data';
 import Product from './Product';
import {Link} from 'react-router-dom'
 

const Container = styledComponents.div`
display:flex;
padding: 20px;
flex-wrap:wrap;
justify-content:space-between;

 
 `;
const products = () => {
  return ( 
   
       <Link to='/Product'>
         <Container>
      {popularproducts.map((item)=>( 
          <Product item={item} key={item.id}/>
      ))}
      </Container>
       </Link>
    
  )
}

export default products
