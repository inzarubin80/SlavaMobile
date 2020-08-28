import * as React from 'react';
import { View, Text,Button} from 'react-native';

const CategoriesScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
      <Text>Categories</Text>

      <Button title="Перейти к типам оболочки" onPress={() => {
          props.navigation.navigate('TypesScreen');
      }} />

    </View>
  );
}

export default CategoriesScreen;
