import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
const useGetCurrentTheme = () => {
  const [storedForcedTheme, setStoredForcedTheme] = useState(undefined);
  useEffect(() => {
    (async () => {
      const currentTheme = await AsyncStorage.getItem("@exnode/forcedTheme");
      setStoredForcedTheme(currentTheme);
    })();
  }, []);
  return { storedForcedTheme };
};

export default useGetCurrentTheme;
