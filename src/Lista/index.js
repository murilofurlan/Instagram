import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feed: this.props.data,
        }

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.loadIcon = this.loadIcon.bind(this);
    }

    like() {

        let feed = this.state.feed;

        if (feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likes: feed.likes - 1,
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likes: feed.likes + 1,
                }
            });
        }
    }

    loadIcon(likeada) {
        return likeada ? require('../images/likeada.png') : require('../images/like.png');
    }

    mostraLikes(likes) {
        
        if (likes <= 0) {
            return;
        } 

        return (
            <Text style={styles.likes}>{likes} {likes > 1 ? 'curtidas' : 'curtida'}</Text>
        );
    }

    render() {
        return(
            
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image 
                        style={styles.photoPerfil}
                        source={{uri: this.state.feed.imgPerfil}}/>

                    <Text style={styles.nameUser}>{this.state.feed.nome}</Text>
                </View>

                <Image 
                        style={styles.photoPublicacao}
                        source={{uri: this.state.feed.imgPublicacao}}
                        resizeMode="cover"/>

                <View style={styles.viewLike}>
                    <TouchableOpacity onPress={ this.like }>
                        <Image 
                                style={styles.iconLike}
                                source={ this.loadIcon(this.state.feed.likeada) }/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSend}>
                        <Image 
                                style={styles.iconLike}
                                source={require('../images/send.png')}/>
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likes)}

                <View style={styles.viewFooter}>
                    <Text style={styles.nameFooter}>{this.state.feed.nome}</Text>
                    <Text style={styles.descricaoFooter}>{this.state.feed.descricao}</Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    areaFeed: {

    },

    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },

    photoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    nameUser: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
    },

    photoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },

    viewLike: {
        flexDirection: 'row',
        padding: 5,
    },

    iconLike: {
        width: 33,
        height: 33,
    },

    buttonSend: {
        paddingLeft: 5,
    },

    viewFooter: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    nameFooter: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        paddingLeft: 5,
    },

    descricaoFooter: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000',
    },

    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
    }

});

export default Lista;