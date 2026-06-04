import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Exemplo de estrutura para os elementos
const ELEMENTS_PLACEHOLDER = Array.from({ length: 20 }, (_, i) => ({
  id: String(i + 1),
  symbol: '?',
  name: 'Elemento',
  atomicNumber: i + 1,
}));

export default function PeriodicTable() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Elementos Químicos</Text>
        
        <View style={styles.grid}>
          {ELEMENTS_PLACEHOLDER.map((item) => (
            <View key={item.id} style={styles.elementCard}>
              <Text style={styles.atomicNumber}>{item.atomicNumber}</Text>
              <Text style={styles.symbol}>{item.symbol}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2a6c',
  },
  scrollContent: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  elementCard: {
    width: '23%', // Aproximadamente 4 por linha
    aspectRatio: 1,
    backgroundColor: '#2a3a7c',
    borderRadius: 8,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4ca1af',
  },
  atomicNumber: {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 10,
    color: '#4ca1af',
  },
  symbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 10,
    color: '#a0a0a0',
    textAlign: 'center',
  },
});
