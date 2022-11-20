import { SafeAreaView, FlatList, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/JobCard/JobCard";
import Toast from "react-native-root-toast";
import styles from "./styles";

const FavoritesJobs = () => {

    const jobs = useSelector((state) => state.favoriteJobs)

    const jobCard = ({ item }) => <JobCard job={item} favorite={true} setFavorite={setFavorite} />

    const dispatch = useDispatch()

    const toastMessage = () => {
        Toast.show('Favorilerden Silindi', {
            position: Toast.positions.CENTER,
            opacity: 1,
            containerStyle: {
                backgroundColor: 'red'
            }
        })
    }

    const delete_job = (job) => dispatch({ type: 'delete_job', payload: { id: job.id } })

    const setFavorite = (job) => {
        delete_job(job)
        toastMessage()
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            {
                jobs.length == 0 &&
                <View style={styles.alertContainer}>
                    <Text style={styles.alertText}>
                        No favorite jobs have been added.
                    </Text>
                </View>
            }
            <FlatList data={jobs} renderItem={jobCard} keyExtractor={id => id.id} />
        </SafeAreaView>
    )
}


export default FavoritesJobs