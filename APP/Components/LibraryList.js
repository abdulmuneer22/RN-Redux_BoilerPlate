import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import { connect } from 'react-redux'

import ListItem from './ListItem'

class LibraryList extends Component{
    constructor(){
        super();
    }

    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged : (r1,r2) =>r1 != r2
        });
        // Feedin ListView Data
        this.dataSource = ds.cloneWithRows(this.props.libraries)
        
    }

    renderRow(library){
        return <ListItem library={library}/>
    }

    

    render(){
        console.log(this.props)
        return(
           <View style = {{flex : 1,marginTop : 20}}>
            <ListView
            dataSource = {this.dataSource}
            renderRow = {this.renderRow}
            />
           </View>
        )

    }
}


const mapStateToProps = state=>{
//console.log(state)
//takes all global states , stores to this.props so LibraryList can have access to it
return {libraries : state.libraries}
};

export default connect(mapStateToProps) (LibraryList);