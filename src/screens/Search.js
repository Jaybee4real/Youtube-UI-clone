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
  const [SearchData, SetSearchQuery] = useState({
    kind: "youtube#searchListResponse",
    etag: "SIc66l19CH1-CMB6ALLY2ieZOqI",
    nextPageToken: "CBkQAA",
    regionCode: "NG",
    pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 25,
    },
    items: [
      {
        kind: "youtube#searchResult",
        etag: "pxUL7ZFQd5NRqkVF4kpfA4qIeMY",
        id: {
          kind: "youtube#video",
          videoId: "hwLo7aU1Aas",
        },
        snippet: {
          publishedAt: "2019-12-26T15:09:18Z",
          channelId: "UCKo-NbWOxnxBnU41b-AoKeA",
          title: "The Best Surfing Clips of 2019",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/hwLo7aU1Aas/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/hwLo7aU1Aas/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/hwLo7aU1Aas/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "SURFER",
          liveBroadcastContent: "none",
          publishTime: "2019-12-26T15:09:18Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "REwULOyyzicY3UdznD0YjJqYYh4",
        id: {
          kind: "youtube#video",
          videoId: "YF761V20u4Y",
        },
        snippet: {
          publishedAt: "2020-06-13T18:30:04Z",
          channelId: "UChuLeaTGRcfzo0UjL-2qSbQ",
          title:
            "All the Best Surfing 2019 Corona Bali Protected ft Kanoa Igarashi, Kelly Slater, Stephanie Gilmore",
          description:
            "Of all the event venues on Tour, Keramas is the one that most readily conjures images in our collective minds of lofty punts and technical surfing. Watch all the ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/YF761V20u4Y/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/YF761V20u4Y/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/YF761V20u4Y/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "World Surf League",
          liveBroadcastContent: "none",
          publishTime: "2020-06-13T18:30:04Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "C8K9JBYdZjOBNL_jKIgB9ZwZnDE",
        id: {
          kind: "youtube#video",
          videoId: "CWYDxh7QD34",
        },
        snippet: {
          publishedAt: "2014-09-02T16:52:33Z",
          channelId: "UCblfuW_4rakIf2h6aqANefA",
          title: "Best surfing action from Red Bull Cape Fear 2014",
          description:
            "Click for the FULL EVENT: http://www.redbullcapefear.com/ The southern tip of Sydney Australia is home to one of the most treacherous waves on the planet: ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/CWYDxh7QD34/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/CWYDxh7QD34/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/CWYDxh7QD34/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Red Bull",
          liveBroadcastContent: "none",
          publishTime: "2014-09-02T16:52:33Z",
        },
      },
    ],
  });
  const [isLoading, SetLoading] = useState(false);

  const searchYoutube = (text) => {
    SetLoading(true);

    // fetch(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=AIzaSyCXoIdJ9u4w-IttlR_bbsVd87M0-ffd02Q`
    // )
    //   .then((data) => data.json())
    //   .then((data) => {
    //     SetSearchQuery(data);
    //     SetLoading(false);
    //     console.log(SearchData);
    //   });

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
      ) : (
        SearchData.items.map((post) => <SearchCard video={SearchData.items} />)
      )}
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
