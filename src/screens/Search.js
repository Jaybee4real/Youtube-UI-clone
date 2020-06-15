import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import SearchCard from "../components/SearchCard";
import DelayInput from "react-native-debounce-input";
import { FlatList } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

const Search = () => {
  const navigation = useNavigation();
  const [SearchData, SetSearchQuery] = useState({});
  const [isLoading, SetLoading] = useState(false);

  const searchYoutube = (text) => {
    SetLoading(true);

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=AIzaSyCXoIdJ9u4w-IttlR_bbsVd87M0-ffd02Q`
    )
      .then((data) => data.json())
      .then((data) => {
        SetSearchQuery(data);
        SetLoading(false);
        console.log(SearchData);
      });

    setTimeout(() => {
      SetLoading(false);
    }, 3000);
  };

  return (
    <View style={style.container}>
      <View style={style.searchContainer}>
        <TouchableOpacity
          style={{ marginLeft: 10, marginTop: 5 }}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name="keyboard-backspace"
            size={24}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <DelayInput
          style={style.input}
          placeholder="Search My Youtube Clone"
          onChangeText={searchYoutube}
          delayTimeout={1000}
        />
        <TouchableOpacity>
          <Icon name="keyboard-voice" size={24} style={{ marginLeft: 5 }} />
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator style={{ marginTop: height / 2 - 20 }} />
      ) : SearchData.items ?  (
        SearchData.items.map((item) => <SearchCard video={item} />)
      ) : <Text style={{ marginTop: height / 2 - 20, textAlign: 'center' }}>Please Search Something...</Text>}
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginTop: 37,
      },
      android: {
        marginTop: 24,
      },
    }),
  },
  input: {
    backgroundColor: "lightgrey",
    width: "80%",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
  },
});

export default Search;
