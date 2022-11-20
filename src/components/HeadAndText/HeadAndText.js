import { Text, View } from "react-native"
import styles from "./styles"

const HeadAndText = ({ headText, text }) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={styles.headText}>
                {headText}:
            </Text>
            <Text style={{
                marginLeft: 5,
                fontSize: 15
            }}>
                {text}
            </Text>
        </View>
    )
}

export default HeadAndText