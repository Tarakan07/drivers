import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TDriversReq, TDriversRes } from "./type";
import {
  BASE_URL,
  Path,
  PREFIX,
  SERVICES,
} from "../../../constants/const-path-api";

const racingDriverEndpoint = `${BASE_URL}${SERVICES.api}${PREFIX.f1}${Path.drivers}`;

const fetchRacingDrivers = createAsyncThunk<TDriversRes, TDriversReq>(
  "racingDriver/fetchRacingDrivers",
  async ({ limit = 10, offset = 0 }, { rejectWithValue }) => {
    const customPromise = new Promise<TDriversRes>((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), 10000)
    );
    try {
      const response = await Promise.race([
        axios
          .get(racingDriverEndpoint, {
            params: { limit: String(limit), offset: String(offset) },
          })
          .then((res) => res?.data?.MRData),
        customPromise,
      ]);

      return response;
    } catch (error) {
      if (error.message === "Request timed out") {
        return data;
      }

      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);

export { fetchRacingDrivers };

const data: TDriversRes = {
  limit: "10",
  offset: "0",
  total: "859",
  DriverTable: {
    Drivers: [
      {
        driverId: "DEFAULT RESPONSE",
        url: "http://en.wikipedia.org/wiki/Carlo_Mario_Abate",
        givenName: "Carlo",
        familyName: "Abate",
        dateOfBirth: "1932-07-10",
        nationality: "Italian",
      },
      {
        driverId: "abecassis",
        url: "http://en.wikipedia.org/wiki/George_Abecassis",
        givenName: "George",
        familyName: "Abecassis",
        dateOfBirth: "1913-03-21",
        nationality: "British",
      },
    ],
  },
};
