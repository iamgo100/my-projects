import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.h1}>To Do List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00B4D8",
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        paddingTop: 35,
        paddingBottom: 10
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
})