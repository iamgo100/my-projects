import { StyleSheet, TouchableWithoutFeedback, Text, Appearance } from "react-native";

export default function Item ({ item, deleteItem }) {
    return (
    <TouchableWithoutFeedback onLongPress={() => deleteItem(item.id)}>
        <Text style={styles.item}>{ item.title }</Text>
    </TouchableWithoutFeedback>
)};

const theme = Appearance.getColorScheme()

const styles = StyleSheet.create({
    item: {
        color: theme === 'light' ? '#2364aE' : '#F7ECDE',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        width: '80%',
        marginLeft: '10%',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: theme === 'light' ? '#2364aE' : '#F7ECDE',
    }
})