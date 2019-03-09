import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card >
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle}
                        source={{ uri: props.album.thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.textStyle}>{props.album.title}</Text>
                    <Text style={styles.textStyle}>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: props.album.image }} />
            </CardSection>
        </Card>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        textAlignVertical: 'auto',
        fontSize: 15,
        marginTop: 1,
        marginBottom: 1,
        color: '#353535'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        borderRadius:50/2
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2,
        marginRight: 2
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

});

export default AlbumDetail;