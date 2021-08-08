import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fetchSearchNews from '../../functions/fetchSearchNews';
import {useDispatch} from 'react-redux';
import SearchNewsList from '../../components/SearchNewsList';
const {width, height} = Dimensions.get('screen');
const PADDING = width * 0.1;
export default Search = props => {
  const dispatch = useDispatch();

  const [search, setSearch] = React.useState(null);

  const searchWithEnter = e => {
    if (!e.nativeEvent.text) return;
    dispatch(fetchSearchNews(e.nativeEvent.text));
  };
  const searchWithButton = () => {
    if (!search) return;
    dispatch(fetchSearchNews(search));
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'lightgrey',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{
          backgroundColor: 'lightgrey',
          minHeight: height + 40,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginHorizontal: PADDING / 2,
            marginVertical: PADDING / 2,
          }}>
          <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="Search..."
            onSubmitEditing={searchWithEnter}
          />
          <TouchableOpacity onPress={searchWithButton}>
            <Icon name="search" size={23} />
          </TouchableOpacity>
        </View>
        <SearchNewsList {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});
