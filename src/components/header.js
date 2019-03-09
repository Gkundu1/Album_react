//Imports lib  for making componenet
import  React  from 'react';
import { Text,View ,Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

//Make a component
const Header=(props)=>{
     const { textStyle,viewStyle }=styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

//styling
const styles={
    viewStyle:{
        backgroundColor:'#acd1f9',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:width,
        paddingTop:5,
        shadowColor:'#007bc3',
        shadowOffSet:{ width:0,height:5 },
        shadowOpacity:0.5,
        elevation:4,
        position:'relative'
    },
    textStyle:{
        fontSize:22,
        color:'#353535'
    }
};

//Make component availalbe to other part of the application.
export default Header;
