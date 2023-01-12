import { StyleSheet, Text, View } from 'react-native'

export function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Hello World!</Text>
      <Text style={styles.eventDate}>Quarta, 11 de Janeiro de 2023.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#131016`,
    padding: 24,
  },
  eventName: {
    color: `#fdfcfe`,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: `#6b6b6b`,
    fontSize: 16,
  },
})
