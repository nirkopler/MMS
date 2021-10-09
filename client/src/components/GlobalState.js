import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
    moviesData: [],
    membersData: [],
    subscriptionsData: []
};

const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState