import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import { Container, Content, List, Text } from 'native-base';
// in dataitem.js we used export d4efault, hence no curly braces are required. 
import DataItem  from '../../component/dataItem'

import { getArticles } from '../../service/news'; 
import Modal from '../../component/modal';

export default class Tab3 extends Component {
  // props are used to pass data from a parent component to a child component in React and they are the main mechanism for component communication.
  constructor(props){
    super(props);

    
    this.state = {
      isLoading:true,
      data:null,
      setModalVisible:false,
      //modalArticleData is used to fetch data and is of type json.
      modalArticleData:{}
    }

  }

  //To view entire news article, when we click on view the following two functions handleItemDataOnPress and handleModalClose
   handleItemDataOnPress = (articleData) => {
     this.setState({
       setModalVisible: true,
       modalArticleData: articleData
     })

   }

   handleModalClose = () => {
     this.setState({
       setModalVisible: false,
       modalArticleData: {}
     })

   }


  //  => is used to initialize a function in a single line 
  // Component did mount function will trigger immediately after a component is mounted and the state will retrigger and render itself automatically.
  componentDidMount(){
    getArticles('technology').then(data => {
      this.setState({
        isLoading:false,
        data: data
      });
  }, error => {
    Alert.alert('Error','Something went wrong11');
  })
}
  render() {
    // to check if above component is getting triggered or not.
    console.log(this.state.data)
    let view = this.state.isLoading ? (
      <View>

        <ActivityIndicator animating = {this.state.isLoading}/>
        <Text style ={{marginTop: 10}}>Please Wait .....</Text>
      </View>
    ) : ( 
      <List 
          dataArray={this.state.data}
          renderRow={(item) => {
            return (
               <DataItem onPress={this.handleItemDataOnPress} data= {item} />
            )
          }
        }


          />

    )
    return (
      <Container>
        
        <Content>
          {view}
            
          
        </Content>
        <Modal
        showModal={this.state.setModalVisible}
        articleData={this.state.modalArticleData}
        //handleModalClose doesnt have paranthesis as we donot want to call it when the function loads.
        onClose={this.handleModalClose} 
        />
      </Container>
    );
  }
}