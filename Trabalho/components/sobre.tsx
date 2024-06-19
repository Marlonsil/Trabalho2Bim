import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,  Image } from 'react-native';
import Home from './home';
export default function App() {
const [page, setPage] = React.useState('sobre');

const renderPage = () => {
if (page === 'sobre') {
return (
<View style={styles.container}>

                <Text style={styles.Logo}> Localize <Text style={styles.Logo2}>Aqui</Text> </Text>
                <View style={styles.line}></View>

                <Image style={styles.Ima} source={require('../assets/images/loca.png')} />

        <Text style={styles.title}> Localização atual</Text>
        <Text style={styles.title}>latitude 0:0</Text>
        <Text style={styles.title}>longitude 0:0</Text>


        <TouchableOpacity style={styles.button2} onPress={() => setPage("home")}>
        <Text style={styles.buttonText2}>Obiter localização</Text>
</TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={() => setPage("home")}>
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
    </View>
);
} else if (page ==='home') {
return <Home />;
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
                button2: {
                    margin:20,
                    backgroundColor: '#fff',
                    padding: 20,
                    paddingHorizontal:100,
                    borderRadius: 5,
                    },
                    buttonText2: {
                    color: '#071D92',
                    fontSize: 16,
                    fontWeight: 'bold',
                    },
    });
