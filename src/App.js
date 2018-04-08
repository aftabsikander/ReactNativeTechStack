import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

import {Header} from "./components/common";
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        // This hold application state i.e Store
        <Provider store={createStore(reducer)}>
            <View style={{flex: 1}}>
                <Header headingTitle="Tech Stack"/>
                <LibraryList/>
            </View>
        </Provider>
    );
};

export default App;