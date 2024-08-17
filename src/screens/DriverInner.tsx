import { useRoute } from "@react-navigation/native";
import React from "react";
import InnerDriver from "../features/drivers/InnerDriver";
import { TDriver } from "../services/API/drivers/type";
const DriverInner = () => {
  const { driver } = useRoute().params as {
    driver: TDriver;
  };

  return <InnerDriver {...driver} />;
};

export default DriverInner;
