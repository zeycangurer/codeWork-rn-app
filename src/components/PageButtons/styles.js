import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        backgroundColor: '#EF5350',
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    disabledButton: {
        flex: 1,
        backgroundColor: '#2F3337',
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: { 
        alignSelf: 'center', 
        fontSize: 15, 
        color: 'white', 
        marginLeft: 5, 
        marginRight: 5 
    },
    icon: { 
        alignSelf: 'center' 
    }
})

export default styles