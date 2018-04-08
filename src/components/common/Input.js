import React from 'react';
import Platform, {StyleSheet, Text, TextInput, View} from 'react-native'

const Input = (
    {
        label,
        placeholder,
        autoCorrect,
        secureTextEntry,
        value,
        onChangeText
    }) => {
    const {inputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> {label}</Text>
            <TextInput style={inputStyle}
                       value={value}
                       placeholder={placeholder}
                       onChangeText={onChangeText}
                       autoCorrect={autoCorrect}
                       secureTextEntry={secureTextEntry}
                       underlineColorAndroid={Platform.OS === 'ios' ? '' : 'transparent'}
            >
            </TextInput>
        </View>
    );
};

export {Input};

const styles = StyleSheet.create({
        inputStyle: {
            color: '#000',
            height: 50,
            width: 100,
            paddingLeft: 5,
            fontSize: 18,
            lineHeight: 23,
            flex: 2
        },
        labelStyle: {
            fontSize: 18,
            paddingLeft: 20,
            flex: 1
        },
        containerStyle: {
            height: 40,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }
    }
);