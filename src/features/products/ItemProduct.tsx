import React, { FC } from 'react'
import { View } from 'react-native'
import { TProduct } from '../../services/API/type'
import { Text } from '../../libs/UI'
type TProps = {
  product: TProduct
}
const ItemProduct: FC<TProps> = ({ product }) => (
  <View style={{ padding: 10 }}>
    <Text>{product.label}</Text>
    <Text>{product.description}</Text>
  </View>
)

export default ItemProduct
