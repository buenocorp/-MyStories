import React, { Component } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

class Feed extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: "Pessoa 1",
        email: "pessoa@te.com",
        image: require("../../assets/imgs/fence.jpg"),
        comments: [
          {
            nickname: "Pessoa 2",
            comment: "...."
          },
          {
            nickname: "Pessoa 3",
            comment: "...."
          }
        ]
      },
      {
        id: Math.random(),
        nickname: "Pessoa 4",
        email: "pessoa@te.com",
        image: require("../../assets/imgs/bw.jpg"),
        comments: []
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <Post key={item.id} {...item} />}
        />
      </View>
    );
  }
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    }
})


export default Feed;