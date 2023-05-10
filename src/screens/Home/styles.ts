import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#1a1a1a`,
    padding: 24,
  },
  eventName: {
    color: `#fafafa`,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: `#6a6a6a`,
    fontSize: 16,
  },
  input: {
    padding: 16,
    height: 56,
    backgroundColor: '#1a1a1a',
    borderRadius: 5,
    color: '#fafafa',
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fafafa',
    fontSize: 24,
  },
})
