import * as React from "react";
import { Text, StyleSheet, View, Pressable, FlatList} from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import AppChoice from '../Screens/AppChoice';
// Import your recommended screens here
import FeelingCongested from '../Screens/FeelingCongested';
import FeelingDehydrated from '../Screens/FeelingDehydrated';
import FeelingHormonal from '../Screens/FeelingHormonal';
import FeelingIrritated from '../Screens/FeelingIrritated';
import FeelingReallyGreat from '../Screens/FeelingReallyGreat';
import FeelingStressed from '../Screens/FeelingStressedandTired';
import FeelingSuperDry from '../Screens/FeelingSuperDry';

const RecommendationItem = ({ title, onPress, isSelected }) => (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        isSelected && styles.selectedButton,
        styles.shadowProp,
      ]}
    >
      <Text
        style={[styles.buttonText, isSelected && styles.selectedButtonText]}
      >
        {title}
      </Text>
    </Pressable>
  );

const RecommendationsScreen = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    // Data for FlatList
    const data = [
      { key: 'Feeling Congested', component: FeelingCongested },
      { key: 'Feeling Dehydrated', component: FeelingDehydrated },
      { key: 'Feeling Hormonal', component: FeelingHormonal },
      { key: 'Feeling Irritated', component: FeelingIrritated },
      { key: 'Feeling Really Great', component: FeelingReallyGreat },
      { key: 'Feeling Stressed and Tired', component: FeelingStressed },
      { key: 'Feeling Super Dry', component: FeelingSuperDry },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Recommendations</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <RecommendationItem
                                title={item.key}
                                onPress={() => {
                                  handleOptionSelect(item.key);
                                  navigation.navigate(item.key);
                                }}
                                isSelected={selectedOption === item.key}
                            />
                        )}
                    />
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
        justifyContent: "center",
    },
    heading: {
        flex: 1,
        fontSize: 32,
        color: "#0e194d",
        textAlign: "center",
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        marginTop: 70,
    },
    flatListContainer: {
        flex: 6,
        flexDirection: "column",
        justifyContent: "center",
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
        marginHorizontal: 30, 
        marginBottom: 30, 
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    buttonText: {
        color: Color.colorSlategray,
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_base,
        marginLeft: 40,
    },
    selectedButton: {
        backgroundColor: "#e1705d",
        borderColor: "#e1705d",
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    selectedButtonText: {
        color: Color.colorWhite,
    },
  });

export default RecommendationsScreen;
