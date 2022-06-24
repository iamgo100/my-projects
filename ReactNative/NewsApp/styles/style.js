import { StyleSheet } from 'react-native';

export const gStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#F7FBFC',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    cont: {
        paddingHorizontal: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 5,
        flex: 1
    },
    header: {
        backgroundColor: '#769FCD',
        width: '100%',
        padding: 10,
        marginBottom: 5,
        paddingTop: 30
    },
    modalHeader: {
        backgroundColor: '#769FCD',
        width: '100%',
        padding: 10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    footer: {
        backgroundColor: '#EFF7FF',
        width: '100%',
        padding: 10,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        // bottom: 0,
        height: 80
    },
    title1: {
        fontSize: 36,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'rw-bold',
    },
    title2: {
        fontSize: 28,
        color: '#fff',
        width: '100%',
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'rw-bold'
    },
    title3: {
        fontSize: 18,
        color: '#769FCD',
        width: '100%',
        marginBottom: 5,
        fontFamily: 'rw-bold'
    },
    title4: {
        fontSize: 18,
        color: '#fff',
        width: '100%',
        fontFamily: 'rw-bold',
        padding: 10
    },
    text: {
        fontSize: 14,
        color: '#000',
        width: '100%',
        fontFamily: 'rw-light'
    },
    news: {
        padding: 10,
        width: '100%',
        marginBottom: 5,
        backgroundColor: '#EFF7FF',
        borderColor: '#769FCD',
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        flex: 1
    },
    btn: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        color: '#fff',
        backgroundColor: '#769FCD',
    },
    input: {
        width: '100%',
        borderBottomColor: '#769FCD',
        borderBottomWidth: 3,
        fontSize: 16,
        color: '#769FCD',
        marginVertical: 10
    }
});