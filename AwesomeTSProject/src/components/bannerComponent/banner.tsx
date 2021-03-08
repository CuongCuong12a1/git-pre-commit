import * as React from 'react';
import { View, Text,Button,TextInput } from 'react-native';


export const Banner = ({route,navigation}:any) => {
    const { itemId, otherParam } = route.params;
    const [postText, setPostText] = React.useState('');
    return (
    
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Banner cc</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
        <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Header', { post: postText });
          
        }}
      />
      
      </View>
      
    );
  };