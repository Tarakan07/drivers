import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../../libs/UI'
const InnerProduct: FC<any> = (driver) => {
  return (
    <View style={styles.container}>
      <Text variantSize="S7">{driver.givenName}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})
export default InnerProduct
