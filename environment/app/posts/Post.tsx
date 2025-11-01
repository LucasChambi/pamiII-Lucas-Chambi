import { Text, View } from "react-native";

export default function Post() {

    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    return (
        <View>
            <Text>{apiUrl}</Text>
        </View>
    );
}