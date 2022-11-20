import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from "../reducers/jobReducer";

const JobProvider = ({ children }) => {

    const store = configureStore({ reducer: jobReducer });

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default JobProvider