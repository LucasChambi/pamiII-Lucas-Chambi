// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7UAx31uzTjUXlwZYrrrRsz_rEllaWJNc",
  authDomain: "meu-primeiro-firebase-5653f.firebaseapp.com",
  projectId: "meu-primeiro-firebase-5653f",
  storageBucket: "meu-primeiro-firebase-5653f.firebasestorage.app",
  messagingSenderId: "714418231609",
  appId: "1:714418231609:web:23f88281c92bf0d07d30e8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import React,{ useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();
      const data = [];

      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });

  setNomes(data);

};

fetchData();
 }, []);

return (
  <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
    <Text>Lista de Nomes:</Text>
    <FlatList
      data={nomes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
      <View>
        <Text>{item.Nome} {item.Sobrenome}</Text>
      </View>
)}
 />
</View>
    );
}
