import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from "react-native";
import Axios from 'axios';
import Loader from './Loader';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

    state = { albums: [], isDataLoaded: false, isLoading: true };

    componentWillMount() {
        console.log('component will mount called');
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({ albums: response.data, isDataLoaded: true, isLoading: false });
                console.log("music albums response is ", response);
            })
            .catch(error => console.log("request error is ", error));
    }

    renderAlbumList() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        const isLoading = this.state.isDataLoaded;
        let text;
        if (isLoading) {
            text = this.renderAlbumList();
        }
        else {
            text = <Text  style={styles.textStyle}>Loading....Please Wait</Text>
        }
        return (
            <ScrollView >
                    {this.state.isLoading && (<Loader loadStatus={this.state.isLoading} />)}
                    { text }
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
        justifyContent: 'center',
        textAlignVertical: 'auto',
        alignItems: 'center',
        fontSize: 22,
        marginTop: 1,
        color: '#353535'
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 1
    }
});
export default AlbumList;