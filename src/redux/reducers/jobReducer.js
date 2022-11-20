import initialState from "../state/jobState"

const jobReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'add_job':
            const { favouriteJob } = action.payload

            if (state.favoriteJobs.length > 0 && isAdded(state.favoriteJobs, favouriteJob.id))
                return state

            return {
                ...state,
                favoriteJobs: [...state.favoriteJobs, favouriteJob]
            }

        case 'delete_job':
            const { id } = action.payload
            return {
                ...state,
                favoriteJobs: state.favoriteJobs.filter((x) => x.id !== id)
            }

        default:
            return state
    }
}

const isAdded = (favouriteJobs, id) => favouriteJobs.some(x => x.id == id)

export default jobReducer