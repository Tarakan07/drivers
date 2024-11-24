type TProduct = {
  id: number
  label: string
  description: string
}
type TProductsRes = {
  products: TProduct[]
}

export type { TProduct, TProductsRes }
