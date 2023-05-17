import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated"
import { StyleSheet } from "react-native"
import { useEffect } from "react"

interface Props {
    index: number;
}

export const AnimatedCircle = (props: Props) => {
    console.log(props.index);
    const scale = useSharedValue(1)
    const opacity= useSharedValue(1)

    useEffect(() => {
        scale.value =  withDelay(100*props.index,withRepeat(withTiming(props.index*2, { duration: 1000}),
        -1,
        true
        ))
        opacity.value = withDelay(100*props.index,withRepeat(withTiming(0.2, { duration: 1000}),
        -1,
        true
        ))
    },[])

    const rStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [{scale: scale.value}]
        }
    })

    return(
        <Animated.View style={[styles.circle, rStyle]}></Animated.View>
    )
}

const styles = StyleSheet.create({
    circle: {
        position: 'absolute',
        width: 35,
        height: 35,
        borderRadius: 25,
        backgroundColor: 'violet',
        zIndex: 2
    }
})