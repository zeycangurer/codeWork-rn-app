import { Text, View } from "react-native"
import HeadAndText from "../HeadAndText/HeadAndText"
import styles from "./styles"

const Head = ({ jobDetail }) => {
    return (
        <View>
            <Text style={styles.headtext}>
                {jobDetail.name}
            </Text>
            <HeadAndText headText={'Locations'} text={jobDetail.locations[0].name} />
            <HeadAndText headText={'Job Level'} text={jobDetail.levels[0].name} />
        </View>
    )
}

export default Head