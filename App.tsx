import React from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useReachable } from './src/libs/hooks'
import { NavContainer, Navigator } from './src/navigator'
function App(): React.JSX.Element {
  const { netReachable } = useReachable()
  if (!netReachable) {
    return null
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavContainer>
        <Navigator />
      </NavContainer>
    </GestureHandlerRootView>
  )
}

export default App
