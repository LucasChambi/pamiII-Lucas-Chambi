// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
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
  <View style={{ 
    borderColor: "red", 
    backgroundColor: "black", 
    flex: 1, 
    justifyContent: "center", 
    alignItems: 'center', }}>

    <Text style={{ 
      fontSize: 24 ,
      color: "white", 
      fontFamily: "arial", 
      fontWeight: "bold", 
      marginTop: 20}}>Lista de Nomes:
      </Text>

    <FlatList
      data={nomes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
      <View>
        <Text style={{ 
          fontSize: 24, 
          color: "white", 
          fontFamily: "arial", 
          fontWeight: "bold"}}>{item.Nome} {item.Sobrenome}
          </Text>
      </View>
)}
 />
</View>
    );
}
