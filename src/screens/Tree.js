import React from 'react'
import { Text, View, StyleSheet,  ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import TreeView from 'react-native-final-tree-view'
import { Button } from 'react-native-paper';
import { connect } from "react-redux"
import { actUpdateShowlist, actSetTodoShowlist} from "../actions"
import { styles, MAIN_COLOR2, colors } from '../styles'

//ion-md-remove
function getIndicator(isExpanded, hasChildrenNodes) {
  if (!hasChildrenNodes) {
    return <Ionicons name='ios-remove' />
  } else if (isExpanded) {
    return  <Ionicons 
      style={{
        fontWeight:"bold",
        fontSize:20,
        color:colors.green}}
      name='ios-arrow-dropdown-circle' />
  } else {
    return <Ionicons  
      style={{
      fontWeight:"bold",
      fontSize:20,
      color:colors.green}}
      name='ios-arrow-dropright' />
  }
}

function Tree(props) {

  const handleShow = list => {
    props.setTodoShowlist(true)
    props.navigation.navigate('Portfolio',  { screen: 'List' });
    props.updateShowlist(list)
  }

  return (
    <ScrollView 
    style={{backgroundColor: '#edeff3', marginTop:5 }}
    > 
      {/* <View style={buttonStyles.buttons}>
        <Button
            mode="contained"
            onPress={() => props.navigation.navigate('Categories', { screen: 'Tree' })}
            style={buttonStyles.button}
        >
          Tree
        </Button>
        
        <Button
          mode="outlined"
          onPress={() => props.navigation.navigate('Categories', { screen: 'Product' })}
          style={buttonStyles.button}
        >
          Product
        </Button>
      </View> */}
      <TreeView
        data={props.tree} 
        initialExpanded={true}
        onNodeLongPress={({ node, level }) => {
          handleShow(node.applIds)
        }}

        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
          return (
            <View style={{
              height:40,
              backgroundColor:colors.white, 
              marginBottom: 4,
              paddingBottom: 5,
              flexDirection: 'row',
              }}
              >
              <Text
                style={{
                  height:40,
                  marginLeft: 25 * level,
                  fontSize: 15,
                  fontWeight:"bold",
                  //height:30,
                }}
              >
                {getIndicator(isExpanded, hasChildrenNodes)} {node.name} | {node.case} | {node.share}% 
              </Text>
            
            </View>
          )
        }}
      />
    </ScrollView>
  )
}

 

const mapStateToProps = (state, ownProps) => {
  return {

    tree: state.treeCal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateShowlist: (content) => {
      dispatch(actUpdateShowlist(content))
    },
    setTodoShowlist: (content) => {
      dispatch(actSetTodoShowlist(content))
    },
  };
}

const buttonStyles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    padding: 2,
  },
  button: {
    margin: 2,
  },
});



 
export default connect(mapStateToProps, mapDispatchToProps)(Tree);


