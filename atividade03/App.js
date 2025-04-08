import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [expandedService, setExpandedService] = useState(null);

  const toggleExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

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
          <View key={index} style={styles.card}>
            <Image
              source={service.image}
              style={[styles.cardImage, { aspectRatio: service.aspectRatio }]}
            />
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{service.title}</Text>
                <TouchableOpacity onPress={() => toggleExpand(index)}>
                  <Icon
                    name={expandedService === index ? 'chevron-up' : 'chevron-down'}
                    size={22}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>
              <Text>
                {service.description} <Text style={styles.highlight}>{service.highlight}</Text>
              </Text>

              {/* Mostrar profissionais se estiver expandido */}
              {expandedService === index && (
                <View style={{ marginTop: 10 }}>
                  {professionals
                    .filter((p) => p.serviceIndex === index)
                    .map((pro, idx) => (
                      <View key={idx} style={styles.proCard}>
                        <Image
                          source={pro.image}
                          style={styles.proImage}
                        />
                        <View style={{ flex: 1 }}>
                          <Text style={styles.proName}>{pro.name}</Text>
                          <Text>{pro.description}</Text>
                        </View>
                      </View>
                    ))}
                </View>
              )}
            </View>
          </View>
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

const professionals = [
  {
    name: 'João Silva',
    description: 'Especialista em banho e tosa, João tem mais de 10 anos de experiência cuidando com carinho de cães e gatos.',
    serviceIndex: 0,
    image: require('./assets/equipe1.jpg'),
  },
  {
    name: 'Dra. Carolina Mendes',
    description: 'Veterinária responsável pelas consultas e vacinas, com foco na saúde preventiva e bem-estar animal.',
    serviceIndex: 1,
    image: require('./assets/equipe2.jpg'),
  },
  {
    name: 'Carlos Eduardo',
    description: 'Treinador experiente que usa técnicas de adestramento positivo para educar os pets com paciência.',
    serviceIndex: 2,
    image: require('./assets/equipe3.jpg'),
  },
  {
    name: 'Lucio Alves',
    description: 'Gerente da loja, conhece todos os produtos e orienta clientes sobre as melhores escolhas para o pet.',
    serviceIndex: 3,
    image: require('./assets/equipe4.jpg'),
  },
  {
    name: 'Fernanda Rocha',
    description: 'Responsável pelo hotel. Fernanda ama os pets e cuida deles com dedicação.',
    serviceIndex: 4,
    image: require('./assets/equipe5.jpg'),
  },
  {
    name: 'Danilo Costa',
    description: 'Responsável pelo setor de adoção, sempre ajudando pets a encontrarem lares amorosos.',
    serviceIndex: 5,
    image: require('./assets/equipe6.jpg'),
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
  proCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
  },
  proImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  proName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});