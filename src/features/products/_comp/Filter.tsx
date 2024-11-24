import React, { FC, useEffect } from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { TPropsFilter } from '../../Products.type'
import { Text } from '../../../libs/UI'
import { useInput } from '../../../libs/hooks'

const Filter: FC<TPropsFilter> = ({ actionSort, actionFilter }) => {
  const { value, bind } = useInput('')
  useEffect(() => {
    actionFilter({ value })
  }, [value])
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => actionSort({ orderBy: 'ASC' })}>
          <Text>Sort ASC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => actionSort({ orderBy: 'DESC' })}>
          <Text>Sort DESC</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput style={styles.search} {...bind} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: '100%',
  },
})

export default Filter
