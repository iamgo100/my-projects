import React from 'react';
import { Text, View, Pressable, Modal, Image } from 'react-native';

import { gStyles } from '../styles/style';

export default function FullInfo({ item, modalVisible, setModalVisible}) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={gStyles.mainContainer}>
                <View style={gStyles.modalHeader}>
                    <Text style={gStyles.title2}>{ item.title }</Text>
                    <Pressable onPress={() => setModalVisible(false)}>
                        <Image source={'../db/icons/close-cross-button.png'} style={{width: 30}} />
                    </Pressable>
                </View>
                <View style={gStyles.cont}>
                    <Text style={gStyles.text}>{ item.full }</Text>
                </View>
            </View>
        </Modal>
    );
};