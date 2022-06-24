import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { gStyles } from '../styles/style';
import FullInfo from './FullInfo';
import AddForm from './AddForm';
import NewsList from './NewsList';

export default function Main({ navigation }) {

    const [modalFullInfoVisible, setModalFullInfoVisible] = useState(false);
    const [modalItem, setModalItem] = useState({});

    const [modalAddFormVisible, setModalAddFormVisible] = useState(false);

    // const [newsList, addNewsToList] = useState(findAllNews());

    // const addNews = (news) => addNewsToList((newsList) => {
    //     return [
    //         ...newsList,
    //         {id: Math.random() * 8, title: news.title, anons: news.anons, full: news.full}
            
    //     ]
    // });
    // addNews={addNews}

    return (
        <View style={gStyles.mainContainer}>
            <FullInfo item={modalItem} modalVisible={modalFullInfoVisible} setModalVisible={setModalFullInfoVisible}/>
            <AddForm modalVisible={modalAddFormVisible} setModalVisible={setModalAddFormVisible}/>
            <View style={gStyles.header}>
                <Text style={gStyles.title1}>Главная страница</Text>
            </View>
            <NewsList setModalVisible={setModalFullInfoVisible} setModalItem={setModalItem}/>
            <View style={gStyles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
                    <Text style={gStyles.btn}>Контакты</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalAddFormVisible(true)}>
                    <Text style={gStyles.btn}>Добавить новость</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};