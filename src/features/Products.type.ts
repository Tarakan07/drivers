type TOrderBy = 'ASC' | 'DESC'
type TSearchValue = string

type TParamsActionSort = {
  orderBy: TOrderBy
}
type TParamsActionFilter = {
  value: TSearchValue
}

type TPropsFilter = {
  actionSort: (params: TParamsActionSort) => void
  actionFilter: (params: TParamsActionFilter) => void
}

export type {
  TOrderBy,
  TParamsActionFilter,
  TParamsActionSort,
  TSearchValue,
  TPropsFilter,
}
