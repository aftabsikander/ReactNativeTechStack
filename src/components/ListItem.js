import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LayoutAnimation, NativeModules, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from "./common";
import * as actions from '../actions';

//To enable Animation for Android we need to include below snippet
const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental
&& UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        const {id, title} = this.props.itemModel;
        const {containerStyle, headingStyle, descriptionStyle} = styles;


        return (
            <TouchableWithoutFeedback onPress={() => {
                //this.props.selectLibraryID({id, data: this.props.itemModel})
                console.log('ListItem clicked');
                this.props.selectedLibraryIdAction(id)
            }}>
                <View>
                    <CardSection>
                        <Text style={headingStyle}>{title}</Text>
                        {/*<Text style={descriptionStyle}>{itemModel.description}</Text>*/}
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }

    renderDescription() {
        console.log(this.props);
        const {itemModel, listExpended} = this.props;
        /* if (itemModel.id === selectedLibraryByUser) {*/
        if (listExpended) {
            return (
                <CardSection>
                    <Text style={styles.descriptionStyle}>{itemModel.description}</Text>
                </CardSection>
            );
        }
    }
}

const styles = StyleSheet.create({
        containerStyle: {
            flex: 1,
            padding: 10,
            backgroundColor: '#d8d8d8',
            justifyContent: 'flex-start'
        },
        headingStyle: {
            fontSize: 28,
            paddingLeft: 10,
            paddingRight: 10,
            color: '#2e6795'
        },
        descriptionStyle: {
            flex: 1,
            fontSize: 18,
            marginTop: 5,
            paddingLeft: 10,
            paddingRight: 10,
            color: '#8c8c8c'
        }
    }
);

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryID === ownProps.itemModel.id;
    return {listExpended: expanded};
    //return {selectedLibraryByUser: state.selectedLibraryID};
};
export default connect(mapStateToProps, actions)(ListItem);