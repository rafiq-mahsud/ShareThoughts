import React, { useState } from 'react';
import { View, Image, TextInput, Button, Text } from 'react-native';

const ThoughtScreen = () => {
  const [thought, setThought] = useState('');
  const [isTextInputVisible, setTextInputVisible] = useState(false);
  const [sharedThought, setSharedThought] = useState('');

  const handleThoughtChange = (text) => {
    setThought(text);
  };

  const handleShareThought = () => {
    setSharedThought(thought);
    setThought('');
  };

  const handleToggleTextInput = () => {
    setTextInputVisible(!isTextInputVisible);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('./Cat03.jpg')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Button title="+" onPress={handleToggleTextInput} />
      </View>
      {sharedThought !== '' && (
        <Text style={{ marginTop: 10 }}>{sharedThought}</Text>
      )}
      {isTextInputVisible && (
        <TextInput
          style={{ marginTop: 20, paddingHorizontal: 10, width: '80%', height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={handleThoughtChange}
          value={thought}
          maxLength={60}
          placeholder="Share a thought..."
        />
      )}
      {isTextInputVisible && (
        <Button title="Share" onPress={handleShareThought} />
      )}
    </View>
  );
};

export default ThoughtScreen;
