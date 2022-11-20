import { FlatList, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import useFetch from "../../hooks/useFetch";
import PageButtons from "../../components/PageButtons/PageButtons";
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./styles";


const Jobs = ({ navigation }) => {

    const [page, setPage] = useState(1)
    const JOBS_URL = 'https://www.themuse.com/api/public/jobs'

    const { data, loading } = useFetch(`${JOBS_URL}?page=${page}`, page)

    const getJobDetail = (jobDetail) => navigation.navigate('JobDetailPage', { jobDetail })

    const jobCard = ({ item }) => <JobCard job={item} onPress={getJobDetail} />

    const incrementPage = () => setPage(page + 1)
    const decrementPage = () => setPage(page - 1)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />

            <Spinner
                visible={loading}
                color='white'
                animation="fade"
            />

            <FlatList data={data.results} renderItem={jobCard} keyExtractor={id => id.id} />

            <PageButtons page={page} incrementPage={incrementPage} decrementPage={decrementPage} />

        </SafeAreaView>
    )
}

export default Jobs