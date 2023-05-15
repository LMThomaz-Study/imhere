import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  function handleParticipantAdd() {
    console.log('Você clicou no botão de Adicionar')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Hello World!</Text>
      <Text style={styles.eventDate}>Quarta, 11 de Janeiro de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6a6a6a"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Leonardo" />
      <Participant name="Livia" />
      <Participant name="Xande" />
      <Participant name="Padoka" />
    </View>
  )
}
