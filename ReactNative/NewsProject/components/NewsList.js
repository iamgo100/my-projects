import React from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { gStyles } from '../styles/style';
import newsJson from '../db/news.json';

export default function NewsList({setModalVisible, setModalItem}) {
    return <View style={gStyles.cont}>
        <FlatList
            data={newsJson}
            renderItem={({item}) => {
                return <TouchableOpacity style={gStyles.news}
                    onPress={() => {
                        setModalVisible(true);
                        setModalItem(item)
                    }}>
                    <Text style={gStyles.title3}>{ item.title }</Text>
                    <Text style={gStyles.text}>{ item.anons }</Text>
                </TouchableOpacity>
            }}
            style={{width: '100%'}}
            keyExtractor={item => item.id}
        />
    </View>
}