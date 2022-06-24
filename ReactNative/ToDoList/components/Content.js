import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Appearance, Alert } from "react-native";
import Form from './Form'
import Item from './ListItem'

export default function Content() {
    const [list, setList] = useState([]);

    const addTask = (task) => setList((list) => {
        return [
            {id: Math.random() * 8, title: task},
            ...list
        ]
    });

    const deleteItem = (id) => {
        Alert.alert('Удалить задачу?', '', [
            {text: 'Да', onPress: () => setList((list) => list.filter(list => list.id !== id))},
            {text: 'Нет'}])
    };

    const render = ({ item }) => (<Item item={item} deleteItem={deleteItem}/>);

    return (
        <View style={styles.content}>
            <Form addTask={addTask}/>
            <FlatList
                data={list}
                renderItem={render}
                style={{width: '100%'}}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const theme = Appearance.getColorScheme()

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    itemBox: {
        width: '80%',
        marginLeft: '10%',
        margin: 10,
        minHeight: 50,
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: theme === 'light' ? '#2364aE' : '#F7ECDE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        color: theme === 'light' ? '#2364aE' : '#F7ECDE',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})