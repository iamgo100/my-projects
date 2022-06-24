import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, FlatList } from "react-native";
import { writeQuote, getQuote, getListOfQuotes } from './db';

export default App = () => {
    const [id, setId] = useState(1);
    const [inspire, setInspire] = useState('');
    const [nickname, setNickname] = useState('');
    const [dblist, setDBList] = useState([]);

    getListOfQuotes(setDBList);
    const addQuote = () => {
        writeQuote(id, inspire, nickname);
        getQuote(id, setDBList);
        let i = id + 1;
        setId(i);
    }

    return (
        <View style={styles.cont}>
            <Text style={styles.header}>Приложение с Firebase</Text>
            <Text style={styles.header2}>Добавить цитату</Text>
            <TextInput placeholder="Enter your inspire" style={styles.input} onChangeText={(text) => {setInspire(text)}}/>
            <TextInput placeholder="Enter your nickname" style={styles.input} onChangeText={(text) => {setNickname(text)}}/>
            <Button title="Save" onPress={addQuote}/>
            <Text style={styles.header2}>Список цитат</Text>
            <FlatList 
                data={dblist}
                renderItem={({item}) => {
                    return <Text>{ item.quote } ({ item.author })</Text>
                }}
                style={{width: '100%'}}
                keyExtractor={item => item.id}
            />
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
    },
    header2: {
        width: "100%",
        backgroundColor: "#CEAB93",
        color: "#FFFBE9",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        marginVertical: 10
    },
    input: {
        width: "90%",
        padding: 5,
        marginVertical: 10,
        borderColor: "#AD8B73",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 5
    }
});