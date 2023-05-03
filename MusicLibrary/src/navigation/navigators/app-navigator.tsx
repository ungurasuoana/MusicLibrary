import { createStackNavigator } from "@react-navigation/stack";
import { AppRouteProps, AppRoutes } from "../routes/app-routes";
import { AuthScreen } from "../../modules/auth/screens/auth";
import { NavigationContainer } from '@react-navigation/native';
import { MusicAppNavigator } from "../../modules/music-library/navigation/navigators/music-navigator";
import { Logo } from "../../assets/icons";
import { Text, View, StyleSheet } from "react-native";

const Stack = createStackNavigator<AppRouteProps>()

export const AppNavigator = () => {
    const isLoggedIn = true;

    const headerTitleLogo = () =>
        <View style={styles.headerBox}>
            <Logo width={25} height={25} />
            <Text style={styles.headerText}>{AppRoutes.Music}</Text>
        </View>


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLoggedIn ? (
                    <Stack.Screen
                        name={AppRoutes.Music}
                        component={MusicAppNavigator}
                        options={{
                            headerTitleAlign: 'left',
                            headerTitle: headerTitleLogo
                        }} />
                ) : (
                    <Stack.Screen
                        name={AppRoutes.Auth}
                        component={AuthScreen} />
                )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        left: 5,
        fontWeight: 'bold'
    }
})