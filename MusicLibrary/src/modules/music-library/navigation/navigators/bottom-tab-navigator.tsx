import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MusicRouteProps, MusicRoutes } from "../routes/music-routes";
import { MusicScreen } from "../../screens/music";
import { FavScreen } from "../../screens/favorites";
import { SettingsScreen } from "../../screens/settings";
import { FavIcon, HomeIcon, Logo, SettingIcon } from "../../../../assets/icons";
import { Pressable, Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { AppRoutes } from "../../../../navigation/routes/app-routes";
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
                // headerBackground: () => <Image 
                // style={{width: '100%', height: 70}}
                // source={background}/>,
                headerTitleAlign: 'left',
                headerTitle: headerTitleLogo,
                headerStyle:{
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                },
                tabBarHideOnKeyboard: true ,
                tabBarStyle: {
                    marginBottom: 20,
                    left: 15,
                    right: 15,
                    height: 60,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    borderTopWidth: 0,
                    position: 'absolute',
                    borderRadius: 25,
                    borderColor: 'grey',
                    borderWidth: 1,
                    paddingTop: 25
                },
                tabBarActiveTintColor: 'pink',
                tabBarLabelStyle:{
                    fontSize: 12,
                    marginBottom: 2,
                }
                // headerStyle: {
                //         borderBottomLeftRadius: 20,
                //         borderBottomRightRadius: 20,
                //         borderColor: 'black',
                //         borderBottomWidth: 1,
                // }
                // tabBarBackground: () => <ImageBackground style={{width: 50, height: 50}}
                // source={}/>
            }}>
            <Tab.Screen
                name={MusicRoutes.Home}
                component={MusicScreen}
                options={{
                    tabBarIcon: () => <HomeIcon width={30} height={30} /> 
                }} />
            <Tab.Screen
                name={MusicRoutes.Favorites}
                component={FavScreen}
                options={{
                    tabBarIcon: () => <FavIcon width={35} height={35} /> 
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
                    tabBarIcon: () => <SettingIcon width={25} height={25} />,
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
        color: 'white',
        fontSize: 20,
        left: 5,
        fontWeight: 'bold'
    }
})