import { Box, Button, ButtonText, GluestackUIProvider, Heading, HStack, Input, InputField, Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { config } from './config/gluestack-ui.config';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Calculadora />
    </GluestackUIProvider>
  );
}

const Calculadora: React.FC = () => {
  const [numero1, setNumero1] = useState<string>('');
  const [numero2, setNumero2] = useState<string>('');
  const [resultado, setResultado] = useState<number>(0);

  const handleCalcular = (operador: string) => {
    Keyboard.dismiss();

    // Permite que o usuário digite com vírgula, mas calcula com ponto
    const num1 = parseFloat(numero1.replace(',', '.'));
    const num2 = parseFloat(numero2.replace(',', '.'));

    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert('Entrada Inválida', 'Por favor, digite números válidos em ambos os campos.');
      return;
    }

    let calculoFinal = 0;
    switch (operador) {
      case '+':
        calculoFinal = num1 + num2;
        break;
      case '-':
        calculoFinal = num1 - num2;
        break;
      case '*':
        calculoFinal = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          Alert.alert('Erro', 'Não é possível dividir por zero.');
          return;
        }
        calculoFinal = num1 / num2;
        break;
      default:
        break;
    }
    setResultado(calculoFinal);
  };

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: 16 }}
    >
      <Heading
        style={{
          fontSize: 32,
          color: '#fff',
          marginBottom: 24,
          textShadowColor: '#000',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 8,
        }}
      >
        Calculadora
      </Heading>

      {/* Container para as operações */}
      <Box
        style={{
          backgroundColor: 'rgba(22,101,52,0.7)',
          padding: 20,
          borderRadius: 12,
          width: '90%',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <VStack style={{ gap: 16 }}>
          <Heading
            style={{
              color: '#fff',
              fontSize: 24,
              textAlign: 'center',
              marginBottom: 8,
            }}
          >
            Operações Matemáticas
          </Heading>

          {/* Input para o primeiro número */}
          <HStack style={{ gap: 16, alignItems: 'center' }}>
            <Text style={{ color: '#fff', width: 80 }}>Número:</Text>
            <Input style={{ flex: 1, borderRadius: 16, backgroundColor: '#f5f5f5' }}>
              <InputField
                placeholder="Digite o 1º valor"
                keyboardType="numeric"
                value={numero1}
                onChangeText={setNumero1}
                style={{ backgroundColor: '#f5f5f5' }}
              />
            </Input>
          </HStack>

          {/* Input para o segundo número */}
          <HStack style={{ gap: 16, alignItems: 'center' }}>
            <Text style={{ color: '#fff', width: 80 }}>Número:</Text>
            <Input style={{ flex: 1, borderRadius: 16, backgroundColor: '#f5f5f5' }}>
              <InputField
                placeholder="Digite o 2º valor"
                keyboardType="numeric"
                value={numero2}
                onChangeText={setNumero2}
                style={{ backgroundColor: '#f5f5f5' }}
              />
            </Input>
          </HStack>
        </VStack>
      </Box>

      {/* Container para os botões */}
      <HStack style={{ gap: 16, marginTop: 20 }}>
        <Button
          onPress={() => handleCalcular('+')}
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: '#22c55e',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ButtonText style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>+</ButtonText>
        </Button>
        <Button
          onPress={() => handleCalcular('-')}
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: '#22c55e',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ButtonText style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>-</ButtonText>
        </Button>
        <Button
          onPress={() => handleCalcular('*')}
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: '#22c55e',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ButtonText style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>x</ButtonText>
        </Button>
        <Button
          onPress={() => handleCalcular('/')}
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: '#22c55e',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ButtonText style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>/</ButtonText>
        </Button>
      </HStack>

      {/* Container para o resultado */}
      <Box
        style={{
          backgroundColor: 'rgba(22,101,52,0.7)',
          padding: 20,
          borderRadius: 12,
          width: '90%',
          marginTop: 20,
        }}
      >
        <Heading
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 28,
          }}
        >
          Resultado: {resultado.toLocaleString('pt-BR')}
        </Heading>
      </Box>
    </Box>
  );
};
