import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Navbar from "../components/Navbar";
import Icon from "react-native-vector-icons/MaterialIcons";
import Minicard from "../components/Minicard";
import data from "./exploreVideoData.json";
import ModalDropdown from "react-native-modal-dropdown";


const { width } = Dimensions.get("window");
const Library = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <Text style={{ marginVertical: 10, fontSize: 18, textAlign: "center" }}>
          Recent
        </Text>
        <ScrollView
          style={{
            height: 180,
            borderBottomColor: "grey",
            borderBottomWidth: 0.7,
          }}
          horizontal={true}
        >
          <Minicard video={data.items[9]} />
          <Minicard video={data.items[10]} />
          <Minicard video={data.items[15]} />
          <Minicard video={data.items[14]} />
          <Minicard video={data.items[11]} />
        </ScrollView>
        <TouchableOpacity>
          <View style={styles.options}>
            <Icon name="history" size={30} style={{ marginHorizontal: 14 }} />
            <Text style={{ fontSize: 18 }}>History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options}>
            <Icon name="get-app" size={30} style={{ marginHorizontal: 14 }} />
            <Text style={{ fontSize: 18 }}>Downloads</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options}>
            <Icon name="thumb-up" size={23} style={{ marginHorizontal: 14 }} />
            <Text style={{ fontSize: 18 }}>Your Liked Videos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options}>
            <Icon
              name="watch-later"
              size={26}
              style={{ marginHorizontal: 14 }}
            />
            <Text style={{ fontSize: 18 }}>Watch Later</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.playlistContainer}>
          <View style={styles.playlistHeader}>
            <Text style={{ fontSize: 18 }}>Playlists</Text>
            <View style={{flexDirection: 'row'}}>
              <ModalDropdown
                defaultIndex={1}
                dropdownTextStyle={{ fontSize: 16 }}
                dropdownStyle={{ width: 135, height: 80 }}
                textStyle={{ fontSize: 16, textAlign: "center" , marginRight: 5}}
                defaultValue={"A-Z"}
                options={["A-Z", "Recently Added"]}
              />
              <Icon name="arrow-drop-down" size={20}/>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: width / 2 - 15,
              marginTop: 10,
            }}
          >
            <Icon color={"blue"} size={32} name="add" />
            <Text style={{ fontSize: 20, marginTop: 3.5, color: "blue" }}>
              New Playlist
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
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
  options: {
    width: width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    height: 57,
  },
  playlistContainer: {
    borderTopColor: "grey",
    borderTopWidth: 0.7,
  },
  playlistHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});
