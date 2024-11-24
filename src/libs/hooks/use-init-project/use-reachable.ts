import NetInfo from "@react-native-community/netinfo";
import React from "react";
const useReachable = (): { netReachable: boolean } => {
  const [netReachable, setNetReachable] = React.useState(true);

  React.useEffect(() => {
    NetInfo.configure({
      useNativeReachability: true,
    });
    const unsub = NetInfo.addEventListener((state) => {
      setNetReachable(state.isConnected);
    });
    return () => unsub();
  }, []);
  return { netReachable };
};

export default useReachable;
