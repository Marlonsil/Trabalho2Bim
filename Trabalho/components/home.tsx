import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Sobre from './sobre';

export default function App() {
const [page, setPage] = React.useState('home');

const renderPage = () => {
    if (page === 'home') {
        return (
            <View style={styles.container}>
                <Text style={styles.Logo}> Localize <Text style={styles.Logo2}>Aqui</Text> </Text>
                <View style={styles.line}></View>

                <Text style={styles.title}> Quer saber onde você está agora?</Text>
                <Text style={styles.testo}>Descubra seu ponto exato no Mapa</Text>
                <Text style={styles.mapa}>Mapa</Text>

                <View style={styles.imageContainer}>
                <View style={styles.circle}></View>
                <Image style={styles.Ima} source={require('../assets/images/celu.png')} />
</View>

                <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
    );
} else if (page === 'sobre') {
    return <Sobre />;
}
};

return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000C29',
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    },
    testo: {
        fontSize: 24,
        
        color: '#fff',
        marginBottom: 20,
        },
        mapa: {
            fontSize: 24,
           
            color: '#0F77B1',
            marginBottom: 20,
            },
    Logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        marginRight:225,
        },
        Logo2: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#0F77B1',
            marginBottom: 20,
            },
            line: {
                width: '40%', // Largura da linha (80% da largura do container)
                height: 2, // Altura da linha
                backgroundColor: '#0F77B1', // Cor da linha
                marginBottom: 10, // Espaço abaixo da linha
                marginRight:220,
                marginTop:-15,
              },
    button: {
    backgroundColor: '#071D92',
    padding: 20,
    paddingHorizontal:100,
    borderRadius: 5,
    },
    buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    },
    circle: {
        marginTop:50,
        width: 100,
        height: 100,
        borderRadius: 60,
        backgroundColor: '#000C29', // Cor do círculo
        position: 'absolute',
        zIndex: -1, // Coloca o círculo atrás da imagem
        borderWidth: 0, // Adiciona uma borda para melhorar o efeito
        borderColor: 'rgba(15, 119, 177, 0.5)', // Cor da borda com transparência
        shadowColor: '#fff', // Cor da sombra
        shadowOffset: { width: 0, height: 100 }, // Offset da sombra
        shadowOpacity: 1.0, // Opacidade da sombra
        shadowRadius: 150, // Raio da sombra
      },
      imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
Ima:{
    width: 400,
    height: 400,
    marginBottom: 20,
    resizeMode: 'contain',
},
    logo: {
        width: 100, 
        height: 100, 
        marginBottom: 20,
    }
    });
    