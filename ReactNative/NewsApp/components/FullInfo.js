import { Text, View, Pressable, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
                        <Ionicons name="close-circle-outline" size={30} color="white" />
                    </Pressable>
                </View>
                <View style={gStyles.cont}>
                    <Text style={gStyles.text}>{ item.full }</Text>
                </View>
            </View>
        </Modal>
    );
};