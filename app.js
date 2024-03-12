import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AgeCalculator" component={AgeCalculatorScreen} />
        <Stack.Screen name="TriangleArea" component={TriangleAreaScreen} />
        <Stack.Screen name="SquareArea" component={SquareAreaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma opção:</Text>
      <Button
        title="Calcular Idade"
        onPress={() => navigation.navigate('AgeCalculator')}
      />
      <Button
        title="Calcular Área do Triângulo"
        onPress={() => navigation.navigate('TriangleArea')}
      />
      <Button
        title="Calcular Área do Quadrado"
        onPress={() => navigation.navigate('SquareArea')}
      />
    </View>
  );
}

function AgeCalculatorScreen() {
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');

  const handleAgeCalculation = () => {
    const ageValue = parseInt(age);

    if (ageValue >= 0 && ageValue <= 12) {
      setCategory('Criança');
    } else if (ageValue >= 13 && ageValue <= 17) {
      setCategory('Adolescente');
    } else if (ageValue >= 18 && ageValue <= 20) {
      setCategory('Jovem');
    } else if (ageValue >= 21 && ageValue <= 60) {
      setCategory('Adulto');
    } else if (ageValue > 60) {
      setCategory('Idoso');
    } else {
      setCategory('Idade inválida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Categoria de Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
        value={age}
      />
      <Button title="Verificar" onPress={handleAgeCalculation} />
      <Text style={styles.category}>{category}</Text>
    </View>
  );
}

function TriangleAreaScreen() {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleArea = () => {
    const area = (parseFloat(base) * parseFloat(height)) / 2;
    setResult(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Triângulo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a base do triângulo"
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura do triângulo"
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
        value={height}
      />
      <Button title="Calcular Área" onPress={handleArea} />
      {result !== null && <Text style={styles.result}>Área: {result}</Text>}
    </View>
  );
}

function SquareAreaScreen() {
  const [side, setSide] = useState('');
  const [result, setResult] = useState(null);

  const handleArea = () => {
    const area = parseFloat(side) ** 2;
    setResult(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Quadrado</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o lado do quadrado"
        onChangeText={(text) => setSide(text)}
        keyboardType="numeric"
        value={side}
      />
      <Button title="Calcular Área" onPress={handleArea} />
      {result !== null && <Text style={styles.result}>Área: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  category: {
    marginTop: 20,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});
