import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Text } from "react-native";

export default function Form({addTask}) {
    const [task, setTextToTask] = useState('');
    const onChange = (text) => setTextToTask(text);
    
    return (
        <View style={styles.content}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу...'></TextInput>
            <TouchableWithoutFeedback onPress={() => addTask(task)}><Text style={styles.btn}>Добавить задачу</Text></TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    btn: {
        backgroundColor: '#2364aE',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        minWidth: 100
    },
    input: {
        width: '80%',
        borderBottomColor: '#2364aE',
        borderBottomWidth: 3,
        fontSize: 16,
        marginTop: 5,
        color: '#2364aE',
        marginVertical: 10
    }
});