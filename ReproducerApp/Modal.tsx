import React from 'react';
import { Button, Modal, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

const CustomModal = ({ visible, setVisible, number, onPress }) => {
  return <Modal
    animationType="fade"
    onRequestClose={() => setVisible(false)}
    transparent={true}
    visible={visible}
  >
    <Pressable style={{ flex: 1, }} onPress={() => setVisible(false)}/>
    <View style={{
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      paddingHorizontal: 20,
      flex: 1,
    }}>
      <SafeAreaView>
        <ScrollView style={{ flexGrow: 1, }}>
          <Text>This is modal {number}</Text>
          <Text>This is modal {number}</Text>
          <Text>This is modal {number}</Text>
          { onPress && <Button
            title='Do something else'
            onPress={onPress}
          /> }
          <Button
            title='Close'
            onPress={() => setVisible(false)}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  </Modal>;
};

export default CustomModal;
