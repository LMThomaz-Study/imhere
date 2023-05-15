import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const participants = [
    'Leonardo',
    'Lívia',
    'Thomaz',
    'Roberto',
    'Alexandre',
    'Roberval',
    'John',
    'Matheus',
  ]

  function handleParticipantAdd() {
    console.log('Você clicou no botão de Adicionar')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão de Remover do participante ${name}`)
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda? Adicione participante a sua lista de
            presença.
          </Text>
        )}
      />
    </View>
  )
}
