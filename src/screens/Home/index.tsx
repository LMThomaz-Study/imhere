import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Hello World!</Text>
      <Text style={styles.eventDate}>Quarta, 11 de Janeiro de 2023.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome ddo participante"
        placeholderTextColor="#6a6a6a"
      />
    </View>
  )
}
