import { Dimensions, View } from "react-native";
import RenderHtml from 'react-native-render-html';
import styles from "./style";

const Body = ({ jobDetail }) => {
    return (
        <View style={styles.body}>
            <RenderHtml
                contentWidth={Dimensions.get('window').width}
                source={{ html: `${jobDetail.contents}` }}
            />
        </View>
    )
}


export default Body