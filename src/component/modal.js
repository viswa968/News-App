import React, { Component } from 'react'
import { Dimensions,Modal,Share } from 'react-native'
import {Container, Header, Content, Body, Left, Icon, Right,Title, Button } from 'native-base'
import { WebView } from 'react-native-webview';

const webViewHeight = Dimensions.get('window').height - 56;

// The Modal component is a basic way to present content above an enclosing view.

class ModalComponent extends Component {
    constructor(props){
        super(props)

    }

    handleClose = () => {
        return this.props.onClose();
    }
    // share option is inbuilt in react native and can be learnt in react native docs.
    handleShare = () => {
        const {url,title} =this.props.articleData;
        const message =`${title}\n\nRead More @${url}\n\nShared via RN News App`;
        return Share.share(
            {title,message,url:message},
            {dialogTitle:`Share ${title}`})
        
    }
    render() {
        const { showModal, articleData} =this.props;
        const { url } = articleData;
        if( url!= undefined){
        return (
            <Modal

            animationType='slide'
            transparent
            visible={ showModal}
            onRequestClose={ this.handleClose }>
                <Container style={{margin:15, marginBottom:0,backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor:'#009387'}}>
                        <Left>
                            <Button onPress={this.handleClose}>
                                <Icon name='close' style={{color:'white', fontSize:12 }}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.Title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                        <Button onPress={this.handleShare}>
                                <Icon name='share' style={{color:'white', fontSize:12 }}/>
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={{flex:1}}>

                        <WebView source = {{uri:url}} style={{flex : 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit={true}
                        
                        />
                        
                     
                    </Content>
                </Container>
            </Modal>
        );
        }else{
            return null;
        }
        } 
    }

export default ModalComponent;
