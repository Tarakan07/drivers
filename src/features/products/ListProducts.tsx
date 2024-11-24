import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { getAllProducts } from '../../services/API/products'
import { TProduct } from '../../services/API/type'
import {
  TOrderBy,
  TParamsActionFilter,
  TParamsActionSort,
  TSearchValue,
} from '../Products.type'
import { Filter, Loader } from './_comp'
import ItemProduct from './ItemProduct'

const ProductList = () => {
  const [product, setProduct] = useState<TProduct[]>([])
  const [filter, setFilter] = useState<TProduct[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)
  const [orderBy, setOrderBy] = useState<TOrderBy | null>(null)
  const [searchValue, setSearchValue] = useState<TSearchValue>('')

  ///

  useEffect(() => {
    getAllProducts().then((data) => {
      setProduct(data.products)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    let filteredData = [...product]

    if (searchValue) {
      filteredData = filteredData.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    }

    if (orderBy) {
      filteredData.sort((l, r) => {
        if (l.label < r.label) return orderBy === 'ASC' ? -1 : 1
        if (l.label > r.label) return orderBy === 'ASC' ? 1 : -1
        return 0
      })
    }

    setFilter(filteredData)
  }, [product, orderBy, searchValue])

  ///

  const actionSort = useCallback(({ orderBy }: TParamsActionSort) => {
    setOrderBy(orderBy)
  }, [])

  const actionFilter = useCallback(({ value }: TParamsActionFilter) => {
    setSearchValue(value)
  }, [])

  ///

  if (isLoading) {
    return <Loader />
  }
  return (
    <FlatList
      data={filter}
      keyExtractor={(item) => `${item.id}`}
      ListHeaderComponent={
        <Filter actionSort={actionSort} actionFilter={actionFilter} />
      }
      renderItem={({ item }) => <ItemProduct {...{ product: item }} />}
    />
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
})

export default ProductList
