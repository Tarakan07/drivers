import { TDriversReq } from "../../../services/API/drivers/type";

type TParamsPagination = {
  limit: string;
  offset: string;
  total: string;
  refetch: (params: TDriversReq) => void;
};

export const usePagination = ({
  limit,
  offset,
  total,
  refetch,
}: TParamsPagination) => {
  const limitNumber = Number(limit);
  const offsetNumber = Number(offset);
  const totalNumber = Number(total);
  const totalPages = Math.ceil(totalNumber / limitNumber);

  const currentPage = Math.floor(offsetNumber / limitNumber) + 1;

  const handlePageChange = (page: number) => {
    refetch({
      limit,
      offset: String(page * limitNumber - limitNumber),
    });
  };

  return {
    currentPage,
    totalPages,
    handlePageChange,
  };
};
