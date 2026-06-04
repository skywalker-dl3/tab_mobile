import { TextInput, StyleSheet, TextInputProps, View } from "react-native";

export const MeuInput = ({ ...rest }: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholderTextColor="#667eea" // Cor do placeholder combinando com o tema
        {...rest} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#1e2a4a", // Azul marinho escuro
    borderRadius: 12,
    paddingHorizontal: 15,
    color: "#fff", // Texto branco para contraste
    borderWidth: 1,
    borderColor: "#4ca1af", // Borda ciano científica
    fontSize: 16,
  },
});
