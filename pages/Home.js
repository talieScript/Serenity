
import * as React from 'react';
import {  View, ScrollView } from 'react-native';
import { Constants } from 'expo';
import {
  Title,
  Caption,
  Paragraph,
  Card,
  Button,
  withTheme,
} from 'react-native-paper';

import NavBar from '../components/NavBar';
import Dashboard from './Dashboard'

class HomeScreen extends React.Component {
  static navigationOptions = {
   header: null,
  };
  
  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: background}}>
        <NavBar />
        <Dashboard />
      </View>
    );
  }
}

export default withTheme(HomeScreen);