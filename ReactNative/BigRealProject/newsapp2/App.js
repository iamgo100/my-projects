import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default App = () => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/')
    console.log(xhr.response);

    return (
        <View style={styles.cont}>
            <Text style={styles.header}>Приложение</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    header: {
        width: "100%",
        backgroundColor: "#AD8B73",
        color: "#FFFBE9",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10
    }
});