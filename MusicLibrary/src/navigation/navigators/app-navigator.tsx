import { createStackNavigator } from "@react-navigation/stack";
import { AppRouteProps, AppRoutes } from "../routes/app-routes";
import { AuthScreen } from "../../modules/auth/screens/auth";
import { NavigationContainer } from '@react-navigation/native';
import { MainAppNavigator} from "../../modules/music-library/navigation/navigators/main-navigator";
import { Text, View, StyleSheet } from "react-native";
import { Login } from "../../modules/auth/screens/login";
import { UserState, useAuthStore } from "../../modules/auth/store/useAuthStore";
import RNBootSplash from "react-native-bootsplash";

const Stack = createStackNavigator<AppRouteProps>()

export const AppNavigator = () => {
    const { user } = useAuthStore((state: UserState) => ({ user: state.user }))

    return (
        <NavigationContainer
        onReady={ () => RNBootSplash.hide({
            fade: true,
            duration: 500
        })}>
            <Stack.Navigator>
                {user?.id ? (
                    <Stack.Screen
                        name={AppRoutes.Music}
                        component={MainAppNavigator}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <Stack.Screen
                        name={AppRoutes.Auth}
                        component={Login}
                        options={{
                            headerShown: false
                        }} />
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