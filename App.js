import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setFirstValue}
        value={firstValue}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        onChangeText={setSecondValue}
        value={secondValue}
        keyboardType='numeric'
      />
      <Button
        title="Adicionar"
        onPress={() => setResult(Number(firstValue) + Number(secondValue))}
      />
      <Button
        title="Subtrair"
        onPress={() => setResult(Number(firstValue) - Number(secondValue))}
      />
      <Button
        title="Multiplicar"
        onPress={() => setResult(Number(firstValue) * Number(secondValue))}
      />
      <Button
        title="Dividir"
        onPress={() => setResult(Number(firstValue) / Number(secondValue))}
      />
      <Text>Resultado: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default App;