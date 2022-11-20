import { Text, ScrollView, Linking } from "react-native";
import Toast from 'react-native-root-toast';
import Buttons from "../../components/Buttons/Buttons";
import Body from "../../components/Body/Body";
import Head from "../../components/Head/Head";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";

const JobDetail = ({ route }) => {

    const jobDetail = route.params.jobDetail

    const submit = (url) => Linking.openURL(url)

    const dispatch = useDispatch()

    const add_job = (job) => {

        !isAdded(job.id) ?
            add(job) :
            message('Favorilere Zaten Eklenmiş')
    }

    const message = (message) => Toast.show(message, {
        position: Toast.positions.CENTER,
        opacity: 1,
        containerStyle: {
            backgroundColor: 'red'
        }
    })

    const add = (job) => {
        dispatch({ type: 'add_job', payload: { favouriteJob: job } })
        message('Favorilere Eklendi')
    }

    const favoriteJobs = useSelector((state) => state.favoriteJobs)
    const isAdded = (id) => favoriteJobs.some(x => x.id == id)

    return (
        <ScrollView style={styles.container}>

            <Head jobDetail={jobDetail} />

            <Text style={styles.title}>Job Detail</Text>

            <Body jobDetail={jobDetail} />

            <Buttons submit={submit} jobDetail={jobDetail} setFavorite={add_job} />

        </ScrollView>
    )
}

export default JobDetail