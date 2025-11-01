import { Button } from 'react-native';

function Post() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  async function onPress() {
    await fetch(apiUrl, { ... })
  }

  return <Button onPress={onPress} title="Post" />;
}