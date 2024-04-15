import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const App_3_1 = ({navigation}) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextPress = () => {
    if (selectedOption == "yes") {
      navigation.navigate("App_3_1_1");
    }

    if (selectedOption == "no") {
      navigation.navigate("App_3_1_2");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>
          Does your skin look dull?
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable 
          style={[
            styles.button,
            selectedOption === "yes" && styles.selectedButton,
            styles.shadowProp, 
            styles.textColor,
          ]}
          onPress={() => handleOptionSelect("yes")}
          >
          <Image
          style={styles.buttonImage}
          contentFit="cover"
          source={require("../Icons/yes.png")}/>
          <Text style={[styles.buttonText, selectedOption === "yes" && styles.selectedButtonText]}>Yes</Text>
        </Pressable>
        <Pressable 
          style={[
            styles.button,
            selectedOption === "no" && styles.selectedButton,
            styles.shadowProp, 
            styles.textColor,
          ]}
          onPress={() => handleOptionSelect("no")}
        >
          <Image
          style={styles.buttonImage}
          contentFit="cover"
          source={require("../Icons/no.png")}/>
          <Text style={[styles.buttonText, selectedOption === "no" && styles.selectedButtonText]}>No</Text>
        </Pressable>
      </View>
      <View style={styles.nextButtonContainer}>
      <Pressable
          style={[styles.nextButton, !selectedOption && { opacity: 0.5 }]}
          onPress={handleNextPress}
          disabled={!selectedOption}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
  },
  headingContainer: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headingText: {
    fontSize: 32,
    color: "#0e194d",
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    marginTop: 70,
  },
  buttonsContainer: {
    flex: 3,
    alignContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Border.br_mini,
    borderColor: Color.colorSlategray,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    paddingVertical: 17.5,
    paddingHorizontal: 30,
    margin: 30,
  },
  buttonText: {
    color: Color.colorSlategray,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    marginLeft: 20,
  },
  buttonImage: {
    height: 60,
    width: 60,
  },
  nextButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  nextButton: {
    borderRadius: 70,
    backgroundColor: "#e1705d",
    paddingHorizontal: 150,
    paddingVertical: 13,
    overflow: "hidden",
  },
  nextButtonText: {
    fontSize: 18,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  selectedButton: {
    backgroundColor: "#e1705d",
    borderColor: "#e1705d", 
  },
  selectedButton: {
    backgroundColor: "#e1705d",
    borderColor: "#e1705d",
  },
  selectedButtonText: {
    color: Color.colorWhite,
  },
});

export default App_3_1;
