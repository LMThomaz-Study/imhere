import { Text, View } from 'react-native'

export function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: `#131016`,
        padding: 24,
      }}
    >
      <Text
        style={{
          color: `#fdfcfe`,
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48,
        }}
      >
        Hello World!
      </Text>
      <Text
        style={{
          color: `#6b6b6b`,
          fontSize: 16,
        }}
      >
        Quarta, 11 de Janeiro de 2023.
      </Text>
    </View>
  )
}
