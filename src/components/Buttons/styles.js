import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-around'
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
    icon: {
        alignSelf: 'center'
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'white',
        marginLeft: 5
    }
})


export default styles