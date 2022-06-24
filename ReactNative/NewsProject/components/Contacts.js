import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { gStyles } from '../styles/style';

export default function Contacts({ navigation }) {
    return (
        <View style={gStyles.mainContainer}>
            <View style={gStyles.header}>
                <Text style={gStyles.title1}>Контакты</Text>
            </View>
            <View style={gStyles.cont}></View>
            <View style={gStyles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Main')}><Text style={gStyles.btn}>Главная</Text></TouchableOpacity>
            </View>
        </View>
    );
};