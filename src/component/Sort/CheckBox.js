import React from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const SquareCheckBox = () => {
  const [checked, setChecked] = React.useState(0);

  return (
    <View>
      <CheckBox
        checked={checked}
        onPress={() => setChecked(!checked)}
        checkedIcon='check-square'
        uncheckedIcon='square-o'
        checkedColor='#FF7F3F'
        size={18}
        checkedSize={18}
      />
    </View>
  );
};

const RoundCheckBox = () => {
  const [checked, setChecked] = React.useState(0);

  return (
    <View styles={{}}>
      <CheckBox
        checked={checked}
        onPress={() => setChecked(!checked)}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='#FF7F3F'
        size={18}
        checkedSize={18}
      />
    </View>
  );
};

export default { SquareCheckBox, RoundCheckBox };