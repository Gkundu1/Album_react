import React from 'react';
import { View , StyleSheet} from 'react-native';

const CardSection=(props)=>{
    return (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

const styles=StyleSheet.create({
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#E9E9E9',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#133e78',
        position:'relative'
    }
    
});

export default CardSection;