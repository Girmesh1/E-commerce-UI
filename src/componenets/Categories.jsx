import { ListItemSecondaryAction } from '@material-ui/core';
import React from 'react'
import styledComponents from 'styled-components';
import {categories} from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../resposive';

const Container = styledComponents.div`

display:flex;

padding: 20px;
background-color:white;
justify-content:space-between ; 
${mobile({flexDirection:"column",padding:"0px"})}

`;


const Categories = () => {
  return (
   
    <Container>
      
      {categories.map(item=>(
      <CategoryItem item = {item} key={item.id}/>
      ))}
      
    </Container>
   
    );

};

export default Categories
