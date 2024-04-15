import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontFamily, Color, FontSize} from "../GlobalStyles";

const AppWelcome = ({navigation}) => {
  return (
    <View style={styles.appWelcome}>
      <View style={styles.mainContainer}>
        <Text style={styles.textTitle}>Skin-Cure</Text>
        <Text style={styles.textHeadings}
          >{`Know your skin type and the best
                skin care routine`}</Text>
        <Pressable
          style={[styles.button1, styles.shadowProp]}
          onPress={() => navigation.navigate("AppStart")}
        >
          <Text style={styles.button1Text}>
            Get Started!
          </Text>
        </Pressable>
      </View>
      <View style={styles.button2}>
        <Pressable
          onPress={() => {}}
        >
          <Text style={styles.button2Text}>
          Already know yours?
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appWelcome: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    alignItems: 'center',
  },
  mainContainer: {
    flex: 4,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 48,
    fontFamily: FontFamily.juliusSansOneRegular,
    color: "#0e194d",
  },
  textHeadings: {
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    color: Color.colorSlategray,
    fontSize: FontSize.size_mini, 
  },
  button1: {
    borderRadius: 70,
    backgroundColor: "#e1705d",
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 120,
    paddingVertical: 13,
    overflow: "hidden",
  },
  button1Text: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: 18,
    color: Color.colorWhite,
  },
  button2: {
    flex: 1, 
    justifyContent: "center",
    alignContent: "center",
  },
  button2Text: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorSlategray,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});

export default AppWelcome;
