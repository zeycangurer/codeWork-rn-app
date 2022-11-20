import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const JobCard = ({ job, onPress, favorite, setFavorite }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={favorite ? undefined : () => onPress(job)}>

            <Text style={styles.jobName}>
                {job?.name}
            </Text>
            <Text style={styles.companyName}>
                {job?.company?.name}
            </Text>

            <View style={styles.locationContainer}>
                <Text style={styles.location}>
                    {job.locations[0]?.name}
                </Text>
            </View>

            <Text style={styles.level}>
                {job?.levels[0].name}
            </Text>

            {
                favorite &&
                <TouchableOpacity style={styles.buttonContainer} onPress={() => setFavorite(job)}>
                    <Text style={styles.button}>
                        Remove
                    </Text>
                </TouchableOpacity>
            }

        </TouchableOpacity >
    )
}


export default JobCard