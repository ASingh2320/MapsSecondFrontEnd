import React, {useState} from 'react';
import { Button, StyleSheet, Text, View,  Dimensions } from 'react-native';
import Building from './Building';
//import MapView from 'react-native-maps'

export default function App() {
  let [data, setData] = useState("No Data");
  let [info, setInfo] = useState([]);
  let [showRoom, toggleRoom] = useState(false);


  const name = "Frey Hall";
  const entrances = [
    {coordinates: [40.91572199812933, -73.12651056511166], name: "ENTR 0"},
    {coordinates: [40.91568600906479, -73.12613365081991], name: "ENTR 1"},
    {coordinates: [40.91584420298465, -73.12622268119594], name: "ENTR 2"}];

  const floors = [
    {
      level: "1",
      hallway: [0, 2, 20, 2],
      rooms: [
        {name: "201", block: [0, 0, 3, 1], door: [1, 1]},
        {name: "205", block: [4, 0, 7, 1], door: [4, 1]},
        {name: "209", block: [8, 0, 9, 1], door: [8, 1]},
        {name: "211", block: [10, 0, 13, 1], door: [11, 1]},
        {name: "217", block: [16, 0, 20, 1], door: [18, 1]},
        {name: "RR", block: [0, 3, 1, 4], door: [0, 3]},
        {name: "STR1", block: [3, 3, 3, 4], door: [3, 3]},
        {name: "ELE1", block: [4, 3, 4, 3], door: [4, 3]},
        {name: "216", block: [7, 3, 8, 4], door: [7, 3]},
        {name: "222", block: [11, 3, 13, 4], door: [12, 3]},
        {name: "224", block: [14, 3, 16, 4], door: [15, 3]},
        {name: "226", block: [17, 3, 19, 4], door: [18, 3]},
        {name: "STR2", block: [20, 3, 20, 4], door: [20, 3]},
      ]
    },
  ]; 

  const doFetch = () =>{
    fetch('http://localhost:3001/api/buildings')
      .then((res) => res.json())
      .then((json) => setInfo(json))
      .catch((error) => console.log(error));
    toggleRoom(true);
  }

  const doPost = () =>{
    let building = {
      name: name,
      entrances: entrances,
      floors: floors,
    }
    console.log(building);
    
    fetch('http://localhost:3001/api/buildings', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(building),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  
  }
  return (
    <View style={styles.container}>
      <Button title="Get Data" onPress={doFetch}></Button>
      {/*<Button title="Post Data" onPress={doPost}></Button>*/}
      {/*info && info.map((x) => <Text key={x._id}>{x.name}</Text>)*/}
      {showRoom && info.map((x) => <Building key={x._id} defaultFloor = {x.floors[0]} floors = {x.floors}/>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
