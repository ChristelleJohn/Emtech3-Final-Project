import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import App_3_1_1_1 from "../Screens/App-3.1.1.1";
import RecommendationsScreen from "../Screens/Recommendations";

const FeelingReallyGreat  = ({ navigation, route }) => {
  const { name, dateRegistered } = route.params || {};
  const handlePress = () => {
    navigation.navigate("RecomReallyGreat", { name, dateRegistered });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Feeling really great</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
        Sensational, fabulous, fantastic. Your skin is glowing honey.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable 
        style={styles.button}
        onPress={() => handlePress()}
        >
          <Text style={styles.buttonText}>Tap for Recommendation</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  headingContainer: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "flex-end",
    borderBottomeColor: Color.colorMediumaquamarine,
  },
  headingText: {
    lineHeight: 43,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.resultHeadingFont_size,
    fontFamily: FontFamily.manualeBold,
  },
  messageContainer: {
    flex: 3,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 50,
  },
  messageText: {
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorBlack,
    fontSize: FontSize.resultHeadingFont_size,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    backgroundColor: Color.colorMediumaquamarine,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: FontFamily.interBold,
    color: "#1e1e1e",
    fontWeight: "700",
    textAlign: "center",
  },
});

export default FeelingReallyGreat;
