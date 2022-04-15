import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Floor from './Floor';

export default function Building(props){

    let [currentFloor, changeFloor] = useState(props.defaultFloor);
    let allFloors = props.floors;
    let [hall, changeHall] = useState(props.defaultFloor.hallway);
    console.log(allFloors);
    let boxsize = 50;

    const moveFloor = (dir) => {
        let lvl = parseInt(currentFloor.level);
        let newlvl = (lvl + dir) + "";
        const newfloor = allFloors.find(x => x.level === newlvl)
        if(newfloor !== undefined){
            changeFloor(newfloor);
            changeHall(newfloor.hallway)
        } 
            

    }

    return (
        <View>
            <Floor id={1} floor={currentFloor} floorhall={hall} boxsize={boxsize}/>
            <Button title='Up' onPress={() => moveFloor(1)}/>
            <Button title='Down' onPress={() => moveFloor(-1)}/>
        </View>
    );
}