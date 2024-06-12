import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Sobre from './sobre';

export default function App() {
const [page, setPage] = React.useState('home');

const renderPage = () => {
    if (page === 'home') {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Localize Aqui</Text>
                <Text style={styles.title}> Quer saber onde você está agora?</Text>
                <Text style={styles.title}>Descubra seu ponto exato no Mapa</Text>
              
                <Image
        source={require('../../components/celular.png')}
        style={styles.logo}
    />

                <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                    <Text style={styles.buttonText}>Clique aqui</Text>
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
    backgroundColor: '#fff',
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    },
    button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    },
    buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    },

    logo: {
        width: 100, 
        height: 100, 
        marginBottom: 20,
    }
    });
    