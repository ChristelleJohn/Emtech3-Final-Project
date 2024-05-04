const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppWelcome from "./Screens/AppWelcome";
import AppStart from "./Screens/App-Start";
import App_1 from "./Screens/App-1";
import App_2 from "./Screens/App-2"; 
import App_2_1 from "./Screens/App-2.1";
import App_2_1_1 from "./Screens/App-2.1.1";
import App_2_1_2 from "./Screens/App-2.1.2";
import App_2_2 from "./Screens/App-2.2";
import App_2_2_1 from "./Screens/App-2.2.1";
import App_2_2_1_1 from "./Screens/App-2.2.1.1";
import App_3 from "./Screens/App-3"; 
import App_3_1 from "./Screens/App-3.1";
import App_3_1_1 from "./Screens/App-3.1.1";
import App_3_1_1_1 from "./Screens/App-3.1.1.1";
import App_3_1_1_1_1 from "./Screens/App-3.1.1.1.1";
import App_3_1_2 from "./Screens/App-3.1.2";
import App_3_2 from "./Screens/App-3.2";
import App_3_2_1 from "./Screens/App-3.2.1";
import FeelingCongested from "./Screens/FeelingCongested";
import FeelingStressed from "./Screens/FeelingStressedandTired";
import FeelingDehydrated from "./Screens/FeelingDehydrated";
import FeelingSuperDry from "./Screens/FeelingSuperDry";
import FeelingReallyGreat from "./Screens/FeelingReallyGreat";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "JuliusSansOne-Regular": require("./assets/fonts/JuliusSansOne-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Manuale-Bold": require("./assets/fonts/Manuale-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AppWelcome"
              component={AppWelcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AppStart"
              component={AppStart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_1"
              component={App_1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_2"
              component={App_2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_2_1"
              component={App_2_1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_2_1_1"
              component={App_2_1_1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_2_1_2"
              component={App_2_1_2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_2_2"
              component={App_2_2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_2_2_1"
              component={App_2_2_1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_2_2_1_1"
              component={App_2_2_1_1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_3"
              component={App_3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_3_1"
              component={App_3_1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_3_1_1"
              component={App_3_1_1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_3_1_1_1"
              component={App_3_1_1_1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_3_1_1_1_1"
              component={App_3_1_1_1_1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_3_1_2"
              component={App_3_1_2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_3_2"
              component={App_3_2}
              opt
              ions={{ headerShown: false }}
            />
            <Stack.Screen
              name="App_3_2_1"
              component={App_3_2_1}
              opt
              ions={{ headerShown: false }}
            />
            <Stack.Screen
              name="FeelingCongested"
              component={FeelingCongested}
              opt
              ions={{ headerShown: false }}
            />
            <Stack.Screen
              name="FeelingStressed"
              component={FeelingStressed}
              opt
              ions={{ headerShown: false }}
            />
            <Stack.Screen
              name="FeelingDehydrated"
              component={FeelingDehydrated}
              opt
              ions={{ headerShown: false }}
            />
            <Stack.Screen
              name="FeelingSuperDry"
              component={FeelingSuperDry}
              opt
              ions={{ headerShown: false }}
            />
            <Stack.Screen
              name="FeelingReallyGreat"
              component={FeelingReallyGreat}
              opt
              ions={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
