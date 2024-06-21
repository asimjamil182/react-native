import { StatusBar } from "expo-status-bar";

const { Text, View } = require("react-native")

const Index = () => {
    return (

        <View className="flex items-center justify-center">
            <Text className="text-red-400">Open up App.js to start working on your app!</Text>
            <StatusBar  backgroundColor="#333" />
        </View>
    )
}

export default Index;