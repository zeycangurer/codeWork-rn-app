import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobDetailPage from './src/screens/JobDetail/JobDetail.js';
import JobsPage from './src/screens/Jobs/Jobs';
import { RootSiblingParent } from 'react-native-root-siblings';
import JobProvider from './src/redux/store/JobProvider';
import FavoritesJobPage from './src/screens/FavoritesJobs/FavoritesJobs';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()


const JobStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='JobsPage' component={JobsPage}
        options={{
          headerTitle: 'Jobs',
          headerTintColor: '#EE5351'
        }} />
      <Stack.Screen name="JobDetailPage" component={JobDetailPage}
        options={{
          headerTitle: 'JobDetailPage',
          headerTintColor: '#EE5351'
        }} />
    </Stack.Navigator>
  )
}


// babel.config dosyasına bir plugin eklemeyince çalsımıyor
const App = () => {
  return (
    <JobProvider>
      <RootSiblingParent>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name='Jobs' component={JobStack} options={{ headerShown: false }} />
            <Drawer.Screen name='FavoritesJobPage' component={FavoritesJobPage} options={{ headerShown: false }} />
          </Drawer.Navigator>
        </NavigationContainer>
      </RootSiblingParent>
    </JobProvider>
  )
}

export default App

