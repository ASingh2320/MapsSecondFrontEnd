import React, {useState} from 'react';
import { Button, StyleSheet, Text, View,  Dimensions } from 'react-native';
import Building from './Building';
//import MapView from 'react-native-maps'

export default function App() {
  let [data, setData] = useState("No Data");
  let [building, setBuilding] = useState({});
  let [info, setInfo] = useState([]);
  let [showRoom, toggleRoom] = useState(false);
  let boxsize = 50;

  const name = "Frey Hall";
  const entrances = [
    {coordinates: [40.91572199812933, -73.12651056511166], name: "ENTR 0"},
    {coordinates: [40.91568600906479, -73.12613365081991], name: "ENTR 1"},
    {coordinates: [40.91584420298465, -73.12622268119594], name: "ENTR 2"}];

  const floors = [
    {
      level: "1",
      hallway: [1,6,15,9, 0,3,11,4, 11,1,12,6, 2,4,3,6, 5,4,6,6, 4,5,5,6],
      rooms: [
          {name: "105", block: [0,1, 2,2], door: [2,1]},
          {name: "109", block: [3,1, 8,2], door: [8,1]},
          {name: "109A", block: [9,1, 10,2], door: [8,1]},
          {name: "ENTR3", block: [11,0, 11,0], door: [11,0]},
          {name: "119", block: [12,1, 17,5], door: [12,3]},
          {name: "RR1", block: [0,4, 1,5], door: [1,4]},
          {name: "STR1", block: [3,4, 3,5], door: [3,4]},
          {name: "ELE1", block: [4,4, 4,4], door: [4,4]},
          {name: "RR2", block: [6,4, 6,5], door: [5,6]},
          {name: "112", block: [7,4, 8,5], door: [8,4]},
          {name: "118", block: [9,4, 10,5], door: [10,5]},
          {name: "ENTR1", block: [0,7, 0,7], door: [0,7]},
          {name: "ENTR2", block: [15,7, 15,7], door: [15,7]},
          {name: "100", block: [0,9, 4,13], door: [3,8]},
          {name: "102", block: [5,9, 9,13], door: [3,8]},
          {name: "104", block: [10,9, 14,13], door: [3,8]},
          {name: "STR2", block: [17,4, 17,5], door: [17,4]},
          {name: "ENTR4", block: [18,4, 18,4], door: [18,4]},
      ]
  },
    {
      level: "2",
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

  const deComp = (lowx, lowy, highx, highy, arr, dups) => {
    for(let i = lowx; i < highx + 1; i++){
        for(let j = lowy; j < highy + 1; j++){
            let key = i + " " + j;
            
            if(dups[key] == 1){
              continue;
            }
            
            arr.push([i * boxsize, j * boxsize]);
            dups[key] = 1;
        }
    }
  }

  const deCompFloor = (floor) => {
    let hblock = [];
    let hallcomp = floor.hallway;
    let dups = {};
    for(let i = 0; i < hallcomp.length; i = i + 4){
        deComp(hallcomp[i], hallcomp[i + 1], hallcomp[i + 2], hallcomp[i + 3], hblock, dups);
    }
    floor.hallblocks = hblock;
    
  }
  const editJSON = (json) => {
    let floors = json[0].floors;
    for(let i = 0; i < floors.length; i++){
      deCompFloor(floors[i]);
      console.log("decomp");
      console.log(floors[i].hallblocks);
    }
    return json;
  }

  const doFetch = async () =>{
    fetch('http://localhost:3001/api/buildings/Frey Hall')
      .then((res) => res.json())
      .then((json) => editJSON(json))
      //.then((json) => console.log("test", json))
      .then((json) => setInfo(json))
      .catch((error) => console.log(error));
      toggleRoom(true)
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
      {/*showRoom && <Building key={building._id} defaultFloor = {building.floors[0]} floors = {building.floors}/>*/}
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
