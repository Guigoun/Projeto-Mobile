import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#B0E0E6', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-pet.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">PetShop</ThemedText>
      </ThemedView>

      {services.map((service, index) => (
        <ThemedView key={index} style={styles.stepContainer}>
          <Image 
            source={service.image} 
            style={[styles.serviceImage, { aspectRatio: service.aspectRatio }]} 
            resizeMode="contain"
          />
          <ThemedText type="subtitle">{service.title}</ThemedText>
          <ThemedText>
            {service.description} <ThemedText type="defaultSemiBold">{service.highlight}</ThemedText>
          </ThemedText>
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}

const services = [
  {
    title: 'Serviço 1: Banho & Tosa',
    description: 'Agende o banho e tosa do seu pet com nossos profissionais especializados.',
    highlight: 'Toalha e perfume inclusos!',
    image: require('@/assets/images/banho-tosa.jpg'),
    aspectRatio: 5 / 8,
  },
  {
    title: 'Serviço 2: Consulta Veterinária',
    description: 'Marque consultas com nossos veterinários para check-ups, vacinas e tratamentos.',
    highlight: 'Aberto 24 horas!',
    image: require('@/assets/images/consulta-veterinaria.jpg'),
    aspectRatio: 4 / 3,
  },
  {
    title: 'Serviço 3: Loja de Produtos',
    description: 'Encontre tudo para seu pet: rações, acessórios, medicamentos e brinquedos.',
    highlight: 'Frete grátis acima de R$100!',
    image: require('@/assets/images/loja-produtos.jpg'),
    aspectRatio: 3 / 2,
  },
  {
    title: 'Serviço 4: Hotel para Pets',
    description: 'Deixe seu pet em nossas mãos quando precisar viajar.',
    highlight: 'Monitoramento 24h e muito carinho!',
    image: require('@/assets/images/hotel-pets.jpg'),
    aspectRatio: 16 / 10,
  },
  {
    title: 'Serviço 5: Adoção Responsável',
    description: 'Conheça nossos pets disponíveis para adoção.',
    highlight: 'Mude uma vida hoje!',
    image: require('@/assets/images/adocao-responsavel.jpg'),
    aspectRatio: 5 / 3,
  },
];

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  reactLogo: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  serviceImage: {
    width: '100%',
    height: undefined,
    borderRadius: 8,
    resizeMode: 'contain', // Ajuste para evitar corte e distorção
    maxHeight: 200, // Limita a altura máxima das imagens para evitar que fiquem muito grandes
  },
});
