import { View, Text } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <View style={{flex: 1,
      justifyContent: 'center',
      alignItems: 'center',}}>
      <Text style={{fontSize: 25, color: 'black'}}>Search</Text>
    </View>
  )
}

export default SearchScreen