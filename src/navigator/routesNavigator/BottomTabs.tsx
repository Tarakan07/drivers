import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { routes } from '../../constants/routes'

import AllProducts from '../../screens/AllProducts'
import CustomTabBar from './CustomBottomTabBar'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName={routes.ALL_PRODUCTS}
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size, focused }) => {
          return null
        },
      })}
    >
      <Tab.Screen
        name={routes.PRODUCT}
        component={AllProducts}
        options={{ title: 'Главная' }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
