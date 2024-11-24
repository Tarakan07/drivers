import { useRoute } from '@react-navigation/native'
import React from 'react'
import InnerProduct from '../features/products/InnerProduct'
import { TProduct } from '../services/API/type'
const Product = () => {
  const { product } = useRoute().params as {
    product: TProduct
  }

  return <InnerProduct {...product} />
}

export default Product
