import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Platform } from 'react-native'
import { ArrowBackSvg } from '../../assets/svgComp/navigator'
import { routes } from '../../constants/routes'
import BottomTabs from './BottomTabs'
import DriverInner from '../../screens/Product'
import { HeaderTitle } from './components/helpers'
const Stack = createStackNavigator()
const animationEnabled = Platform.select({
  ios: true,
  android: false,
})

const interpolateAnimate = {
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    }
  },
  animationEnabled,
}
function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerBackTitle: 'Назад',
        headerTitleStyle: {
          fontSize: 20,
        },

        headerShadowVisible: false,

        headerTitleContainerStyle: {
          width: '100%',
          justifyContent: 'center',
          marginHorizontal: 0,
        },

        headerRightContainerStyle: {
          paddingRight: 16,
        },

        headerBackImage: () => <ArrowBackSvg />,
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name={routes.MAIN}
          component={BottomTabs}
          options={{
            headerShown: false,
            ...interpolateAnimate,
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name={routes.PRODUCT}
          component={DriverInner}
          options={({ route, navigation }) => ({
            headerTitle: () => (
              <HeaderTitle title={(route.params as any)?.title || ''} />
            ),
            ...interpolateAnimate,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default Navigator
