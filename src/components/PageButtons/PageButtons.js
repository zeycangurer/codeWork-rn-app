import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

const PageButtons = ({ page, incrementPage, decrementPage }) => {
    return (
        <View style={styles.buttonContainer}>
            {
                page !== 1 ?
                    <TouchableOpacity style={styles.button} onPress={decrementPage}>
                        <AntDesign name="caretleft" size={15} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>
                            Previous
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.disabledButton} disabled onPress={decrementPage}>
                        <AntDesign name="caretleft" size={15} color="white" style={styles.icon} />
                        <Text style={styles.buttonText}>
                            Previous
                        </Text>
                    </TouchableOpacity>
            }
            {
                page !== 99 ?
                    <TouchableOpacity style={styles.button} onPress={incrementPage}>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                        <AntDesign name="caretright" size={15} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.disabledButton} disabled onPress={incrementPage}>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                        <AntDesign name="caretright" size={15} color="white" style={styles.icon} />
                    </TouchableOpacity>
            }
        </View>
    )
}

export default PageButtons