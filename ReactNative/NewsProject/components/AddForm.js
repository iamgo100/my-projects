import { Text, View, Pressable, Modal, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
// import { addNews } from '../databases';

import { gStyles } from '../styles/style';

export default function AddForm({ modalVisible, setModalVisible}) {
    const [news, setNews] = useState({id: Math.random() * 8, title: '', anons: '', full: ''});
    const onChangeTitle = (title) => setNews({
        title: title,
        anons: news.anons,
        full: news.full
    });
    const onChangeAnons = (anons) => setNews({
        title: news.title,
        anons: anons,
        full: news.full
    });
    const onChangeFull = (full) => setNews({
        title: news.title,
        anons: news.anons,
        full: full
    });

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={gStyles.mainContainer}>
                <View style={gStyles.modalHeader}>
                    <Text style={gStyles.title2}>Добавить новость</Text>
                    <Pressable onPress={() => setModalVisible(false)}>
                        <Image source={'../db/icons/close-cross-button.png'} style={{width: 30}} />
                    </Pressable>
                </View>
                <View style={gStyles.cont}>
                    <TextInput style={gStyles.input} onChangeText={onChangeTitle} placeholder='Впишите заголовок новости'></TextInput>
                    <TextInput style={gStyles.input} onChangeText={onChangeAnons} placeholder='Впишите анонс новости'></TextInput>
                    <TextInput style={gStyles.input} onChangeText={onChangeFull} placeholder='Впишите текст новости' multiline></TextInput>
                    <Pressable onPress={() => {/*addNews(news),*/ setModalVisible(false)}}><Text style={gStyles.btn}>Добавить новость</Text></Pressable>
                </View>
            </View>
        </Modal>
    );
};