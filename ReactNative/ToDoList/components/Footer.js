import { StyleSheet, View, Text } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.author}>by Elkina Galina</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        backgroundColor: '#2364aE',
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    author: {
        color: 'white',
    }
})