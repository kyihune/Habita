import { Stack } from "expo-router";
import { Text, View, ActivityIndicator } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter"
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins"


export default function Layout()
{
    const [fontsLoaded] = useFonts({
                            Inter_400Regular,
                            Poppins_600SemiBold
                          });

    if (!fontsLoaded)
    {
        return (
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <ActivityIndicator size="large"/>
            </View>
        );

    }

    return (
        <Stack screenOptions={{headerShown:false}}>
            {"(tabs)/LoginPage"}
            <Stack.Screen
                name="LoginPage"
                options={{headerTitle:"", headerShown:false}}
            />

        </Stack>
    );
}
