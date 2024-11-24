import { createNavigationContainerRef } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/routers";

export const navigationRef = createNavigationContainerRef<ParamListBase>();

export function navigate(name: string, params?: Record<string, any>) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
