import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Text style={styles.symbol}>H</Text>
        <Text style={styles.title}>Química Pro</Text>
        <Text style={styles.subtitle}>Explore os elementos do universo</Text>
        
        <Link href="/home" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Começar Exploração</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f2027', // Gradiente escuro
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  symbol: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#4ca1af',
    borderWidth: 4,
    borderColor: '#4ca1af',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4ca1af',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});