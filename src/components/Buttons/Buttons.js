import { View, TouchableOpacity, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

const Buttons = ({ submit, jobDetail, setFavorite }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => submit(jobDetail.refs.landing_page)}>
                <Entypo name="login" size={15} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>
                    Submit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setFavorite(jobDetail)}>
                <AntDesign name="heart" size={15} color="white" style={styles.icon} />
                <Text style={styles.buttonText}>
                    Favorite Job
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default Buttons