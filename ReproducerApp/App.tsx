/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomModal from './Modal';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);

  return (
    <View>
      <Button
        onPress={() => setVisible1(true)}
        title="Open modal 1"
        color="#841584"
      />
      <Button
        onPress={() => setVisible2(true)}
        title="Open modal 2"
        color="#841584"
      />
      <Button
        onPress={() => setVisible3(true)}
        title="Open modal 3"
        color="#841584"
      />
      <Button
        onPress={() => setVisible4(true)}
        title="Open modal 4"
        color="#841584"
      />
      <Button
        onPress={() => setVisible5(true)}
        title="Open modal 5"
        color="#841584"
      />
      <Button
        onPress={() => setVisible6(true)}
        title="Open modal 6"
        color="#841584"
      />
      <CustomModal
        visible={visible1}
        setVisible={setVisible1}
        number={1}
      />
      <CustomModal
        visible={visible2}
        setVisible={setVisible2}
        number={2}
      />
      <CustomModal
        visible={visible3}
        setVisible={setVisible3}
        number={3}
      />
      <CustomModal
        visible={visible4}
        setVisible={setVisible4}
        number={4}
      />
      <CustomModal
        visible={visible5}
        setVisible={setVisible5}
        number={5}
      />
      <CustomModal
        visible={visible6}
        setVisible={setVisible6}
        number={6}
        onPress={() => {
          setVisible6(false)
          setVisible2(true)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
