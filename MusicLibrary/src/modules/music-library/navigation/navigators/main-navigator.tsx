import { StyleSheet } from "react-native";
import { EditUser } from "../../screens/edit-user";
import { createStackNavigator } from "@react-navigation/stack";
import { MainProps, MainRoutes } from "../routes/main-routes";
import { BottomTabsNavigator } from "./bottom-tab-navigator";
import { CardDetails } from "../../screens/cardDetails";

const Stack = createStackNavigator<MainProps>()

export const MainAppNavigator = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name={MainRoutes.BottomTab} component={BottomTabsNavigator}
            options={{ headerShown: false }}/>
            <Stack.Screen name={MainRoutes.EditUser} component={EditUser}
                        options={{
                            headerStyle:{
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            },
                            headerTitleStyle: {
                                color: 'white'
                            },
                            headerTintColor: 'pink'
                        }}/>
            <Stack.Screen name={MainRoutes.CardDetails} component={CardDetails}
            options={{
                headerStyle:{
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                },
                headerTitleStyle: {
                    color: 'white'
                },
                headerTintColor: 'pink'
            }}/>
        </Stack.Navigator>
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