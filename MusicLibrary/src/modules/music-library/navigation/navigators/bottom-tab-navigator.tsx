import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MusicRouteProps, MusicRoutes } from "../routes/music-routes";
import { MusicScreen } from "../../screens/music";
import { FavScreen } from "../../screens/favorites";
import { SettingsScreen } from "../../screens/settings";
import { FavIcon, HomeIcon, Logo, SettingIcon } from "../../../../assets/icons";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { AppRoutes } from "../../../../navigation/routes/app-routes";
import { EditUser } from "../../screens/edit-user";
import { createStackNavigator } from "@react-navigation/stack";
import { MainRoutes } from "../routes/main-routes";

const Tab = createBottomTabNavigator<MusicRouteProps>()

const headerTitleLogo = () =>
    <View style={styles.headerBox}>
        <Logo width={25} height={25} />
        <Text style={styles.headerText}>{AppRoutes.Music}</Text>
    </View>

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{

                headerTitleAlign: 'left',
                headerTitle: headerTitleLogo,
                tabBarHideOnKeyboard: true ,
                tabBarStyle: {
                    marginBottom: 20,
                    left: 20,
                    right: 20,
                    height: 60,
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    position: 'absolute',
                    borderRadius: 25,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    elevation: 12,
                    // paddingTop: 25
                },
                tabBarShowLabel: false,
                // tabBarActiveTintColor: 'red'
                // headerStyle: {
                //         borderBottomLeftRadius: 20,
                //         borderBottomRightRadius: 20,
                //         borderColor: 'black',
                //         borderBottomWidth: 1,
                // }
            }}>
            <Tab.Screen
                name={MusicRoutes.Home}
                component={MusicScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <HomeIcon width={30} height={30} /> :
                        <HomeIcon width={20} height={20} />,
                }} />
            <Tab.Screen
                name={MusicRoutes.Favorites}
                component={FavScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <FavIcon width={35} height={35} /> :
                        <FavIcon width={25} height={25} />,
                }} />
            <Tab.Screen
                name={MusicRoutes.Settings}
                component={SettingsScreen}
                options={({ navigation, route }) => ({
                    headerShown: true,
                    headerRight: () => (
                        <Pressable style={{ width: 50 }} onPress={() => navigation.navigate(MainRoutes.EditUser)}>
                            <Text style={{ color: 'pink' }}>Edit</Text>
                        </Pressable>
                    ),
                    tabBarIcon: ({ focused }) => focused ?
                        <SettingIcon width={35} height={35} /> :
                        <SettingIcon width={25} height={25} />,
                })
                } />
        </Tab.Navigator>
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