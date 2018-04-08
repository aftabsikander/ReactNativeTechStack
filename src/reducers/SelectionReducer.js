export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            // if we want to collapse and expand
            //return action.payLoad === state ? null : action.payLoad;
            return action.payLoad;
        default:
            return state;
    }
};