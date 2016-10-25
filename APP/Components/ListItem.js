import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableWithoutFeedback
} from 'react-native';


//Call Action Creator
import * as actions from '../actions'
// used to invoke the actions from "actions"
import { connect } from 'react-redux'

class ListItem extends Component{

rendeDescription(){

    const {library,selectedlibraryId} = this.props

    if(selectedlibraryId === library.id){
        return(
            <View>
            <Text>{library.description}</Text>
            </View>
            )
    }
}


render(){
    //console.log(this.props.selectedlibraryId)

    
    const { id,title} = this.props.library
    

    return(
        <View style = {Styles.cardSection}>
        <TouchableWithoutFeedback
        onPress = {()=>{
            this.props.selectedlibrary(id)
            
            
            }}
        >
            <View>
            <Text>{title}</Text>
            {this.rendeDescription()}
            </View>
        </TouchableWithoutFeedback>
        
        </View>
    )
}
}


const Styles = StyleSheet.create({
cardSection : {
    borderColor : 'grey',
    padding : 10,
    borderWidth : 1,
    borderRadius : 5,
    marginLeft : 10,
    marginRight : 10
    


}
})

const mapStateToProps = state => {
    return { selectedlibraryId : state.selectedLibraryId}
}

export default connect(mapStateToProps,actions)(ListItem)

// null because there are no mapStateToProps
//this.props