import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, ScrollView, TextInput, Switch,
  Button, TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [petNome, setPetNome] = useState('');
  const [petIdade, setPetIdade] = useState('');
  const [servicoSelecionado, setServicoSelecionado] = useState('');
  const [porteSelecionado, setPorteSelecionado] = useState('');
  const [nivelAtividade, setNivelAtividade] = useState(0);
  const [nivelSocial, setNivelSocial] = useState(0);
  const [urgente, setUrgente] = useState(false);
  const [revisao, setRevisao] = useState(false);

  const handleAgendar = () => {
    alert(`Agendamento realizado para o serviço: ${servicoSelecionado}`);
  };

  const handleLimpar = () => {
    setNome('');
    setEmail('');
    setPetNome('');
    setPetIdade('');
    setServicoSelecionado('');
    setPorteSelecionado('');
    setNivelAtividade(0);
    setNivelSocial(0);
    setUrgente(false);
    setRevisao(false);
  };

  const servicos = [
    'Banho & Tosa',
    'Consulta Veterinária',
    'Adestramento',
    'Loja de Produtos',
    'Hotel para Pets',
    'Adoção Responsável'
  ];

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('./assets/logo-pet.jpg')}
        style={styles.banner}
      />

      <View style={styles.section}>
        <Text style={styles.title}>Agendamento PetShop</Text>

        <TextInput
          placeholder="Seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Nome do pet"
          value={petNome}
          onChangeText={setPetNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Idade do pet"
          value={petIdade}
          onChangeText={setPetIdade}
          style={styles.input}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Serviço</Text>
        <Picker
          selectedValue={servicoSelecionado}
          onValueChange={setServicoSelecionado}
          style={styles.picker}
        >
          <Picker.Item label="Selecione um serviço" value="" />
          {servicos.map((servico, index) => (
            <Picker.Item key={index} label={servico} value={servico} />
          ))}
        </Picker>

        <Text style={styles.label}>Porte do Pet</Text>
        <Picker
          selectedValue={porteSelecionado}
          onValueChange={setPorteSelecionado}
          style={styles.picker}
        >
          <Picker.Item label="Selecione o porte" value="" />
          <Picker.Item label="Pequeno" value="pequeno" />
          <Picker.Item label="Médio" value="medio" />
          <Picker.Item label="Grande" value="grande" />
        </Picker>

        <Text style={styles.label}>Nível de atividade</Text>
        <Slider
          value={nivelAtividade}
          onValueChange={setNivelAtividade}
          minimumValue={0}
          maximumValue={10}
          step={1}
          style={styles.slider}
        />
        <Text style={styles.sliderValue}>{nivelAtividade}</Text>

        <Text style={styles.label}>Nível de socialização</Text>
        <Slider
          value={nivelSocial}
          onValueChange={setNivelSocial}
          minimumValue={0}
          maximumValue={10}
          step={1}
          style={styles.slider}
        />
        <Text style={styles.sliderValue}>{nivelSocial}</Text>

        <View style={styles.switchContainer}>
          <Text>Urgente?</Text>
          <Switch value={urgente} onValueChange={setUrgente} />
        </View>

        <View style={styles.switchContainer}>
          <Text>Revisão Veterinária?</Text>
          <Switch value={revisao} onValueChange={setRevisao} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Agendar" onPress={handleAgendar} color="#4CAF50" />
          <View style={{ height: 10 }} />
          <Button title="Limpar" onPress={handleLimpar} color="#f44336" />
        </View>
      </View>

      <Text style={styles.galleryTitle}>Conheça nossos serviços</Text>
      <ScrollView horizontal contentContainerStyle={styles.imageGallery}>
        {[
          { label: 'Banho & Tosa', image: require('./assets/banho-tosa.jpg') },
          { label: 'Consulta Vet.', image: require('./assets/consulta-veterinaria.jpg') },
          { label: 'Adestramento', image: require('./assets/adestramento.jpg') },
          { label: 'Loja', image: require('./assets/loja-produtos.jpg') },
          { label: 'Hotel', image: require('./assets/hotel-pets.jpg') },
          { label: 'Adoção', image: require('./assets/adocao-responsavel.jpg') },
        ].map((item, index) => (
          <View key={index} style={styles.galleryCard}>
            <Image source={item.image} style={styles.galleryImage} />
            <Text style={styles.galleryText}>{item.label}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  section: {
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#4CAF50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderValue: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 16,
  },
  galleryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 10,
  },
  imageGallery: {
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  galleryCard: {
    marginRight: 10,
    alignItems: 'center',
    width: 140,
  },
  galleryImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  galleryText: {
    marginTop: 6,
    fontSize: 14,
    textAlign: 'center',
  },
});
