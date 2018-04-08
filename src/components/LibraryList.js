import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem'

class LibraryList extends Component {

    displayListRow(item) {
        return <ListItem itemModel={item}/>;
    }

    render() {
        return (
            <FlatList
                data={this.props.libraryCollection} // pass in the data you want rendered
                renderItem={({item, index}) => this.displayListRow(item)} // Dictate how each item is rendered
                keyExtractor={(item) => item.id.toString()} // Sets a key, or you'll get a warning
            />
        );
    };

    //  renderItem={this.displayListRow(library)}
}

const mapStateToProps = state => {
    return {libraryCollection: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
