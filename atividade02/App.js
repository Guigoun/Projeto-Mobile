import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('./assets/logo-pet.jpg')}
        style={styles.banner}
      />

      <View style={styles.section}>
        <Text style={styles.title}>PetShop</Text>
        <Text style={styles.description}>
          Bem-vindo ao nosso PetShop! Oferecemos serviços completos para o bem-estar do seu pet com carinho, qualidade e segurança.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Horário: 08h às 20h</Text>
        <Text style={styles.infoText}>Atendimento 7 dias por semana</Text>
        <Text style={styles.infoText}>Telefone: (11) 1234-5678</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Serviços</Text>
        {services.map((service, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image
              source={service.image}
              style={[styles.cardImage, { aspectRatio: service.aspectRatio }]}
            />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{service.title}</Text>
                <Icon name="chevron-forward" size={22} color="#888" />
              </View>
              <Text>
                {service.description} <Text style={styles.highlight}>{service.highlight}</Text>
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const services = [
  {
    title: 'Banho & Tosa',
    description: 'Agende o banho e tosa do seu pet com nossos profissionais especializados.',
    highlight: 'Toalha e perfume inclusos!',
    image: require('./assets/banho-tosa.jpg'),
    aspectRatio: 12 / 8,
  },
  {
    title: 'Consulta Veterinária',
    description: 'Marque consultas com nossos veterinários para check-ups, vacinas e tratamentos.',
    highlight: 'Aberto 24 horas!',
    image: require('./assets/consulta-veterinaria.jpg'),
    aspectRatio: 12 / 8,
  },
  {
    title: 'Adestramento',
    description: 'Adestre seu pet com nossos treinadores.',
    highlight: 'Seu pet com bons modos!',
    image: require('./assets/adestramento.jpg'),
    aspectRatio: 10 / 6,
  },
  {
    title: 'Loja de Produtos',
    description: 'Encontre tudo para seu pet: rações, acessórios, medicamentos e brinquedos.',
    highlight: 'Frete grátis acima de R$100!',
    image: require('./assets/loja-produtos.jpg'),
    aspectRatio: 3 / 2,
  },
  {
    title: 'Hotel para Pets',
    description: 'Deixe seu pet em nossas mãos quando precisar viajar.',
    highlight: 'Monitoramento 24h e muito carinho!',
    image: require('./assets/hotel-pets.jpg'),
    aspectRatio: 15 / 7,
  },
  {
    title: 'Adoção Responsável',
    description: 'Conheça nossos pets disponíveis para adoção.',
    highlight: 'Mude uma vida hoje!',
    image: require('./assets/adocao-responsavel.jpg'),
    aspectRatio: 12 / 7,
  },
];

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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  infoBox: {
    marginHorizontal: 16,
    backgroundColor: '#e0f2f1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#00695c',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  card: {
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: undefined,
    borderRadius: 12,
  },
  cardContent: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#1e88e5',
  },
});
