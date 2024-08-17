type TDriverStoreStatus = {
  error: any;
  loading: boolean;
};
type TDriverStore = {
  status: TDriverStoreStatus;
} & TDriversRes;

//
type TDriversReq = {
  limit?: string;
  offset?: string;
};
//

type TDriver = {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  permanentNumber?: string;
  code?: string;
};

type DriversTable = {
  Drivers: TDriver[];
};

type TDriversRes = {
  limit: string;
  offset: string;
  total: string;
  DriverTable: DriversTable;
};

export type {
  TDriverStore,
  TDriversReq,
  TDriversRes,
  TDriver,
  TDriverStoreStatus,
};
