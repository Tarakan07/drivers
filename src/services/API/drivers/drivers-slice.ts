import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRacingDrivers } from "./actions";
import { TDriversRes, TDriverStore } from "./type";
import Drivers from "../../../screens/Drivers";
const initialState: TDriverStore = {
  limit: "10",
  offset: "0",
  total: "859",
  DriverTable: {
    Drivers: [],
  },
  status: {
    error: null,
    loading: false,
  },
};
const driversSlice = createSlice({
  name: "driversSlice",
  initialState,
  reducers: {
    setDrivers: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRacingDrivers.pending, (state) => {
        state.status.error = null;
        state.status.loading = true;
      })
      .addCase(
        fetchRacingDrivers.fulfilled,
        (state, action: PayloadAction<TDriversRes>) => {
          const { DriverTable, offset, limit, total } = action.payload;

          // state.DriverTable.Drivers = [
          //   ...state.DriverTable.Drivers,
          //   ...DriverTable.Drivers,
          // ];
          state.DriverTable.Drivers = DriverTable.Drivers;
          state.offset = offset;
          state.limit = limit;
          state.total = total;
          state.status.loading = false;

          state.status.loading = false;
        }
      )
      .addCase(fetchRacingDrivers.rejected, (state, action) => {
        state.status.error = action.payload;
        state.status.loading = false;
      });
  },
});
// export const slctRacing = (state: RootState) => state.ratingStartSlice;

export const { actions, reducer } = driversSlice;
export default driversSlice;
