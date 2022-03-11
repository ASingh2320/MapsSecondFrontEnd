import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Floor from './Floor';

export default function Building(props){

    let [currentFloor, changeFloor] = useState(props.defaultFloor);
    let allFloors = props.floors;
    let [hall, updateHall] = useState([]);
    let boxsize = 50;

    const deComp = (lowx, lowy, highx, highy, arr) => {
        for(let i = lowx; i < highx + 1; i++){
            for(let j = lowy; j < highy + 1; j++){
                arr.push([i * boxsize, j * boxsize]);
            }
        }
    }

    useEffect(() => {
        let hallway = [];
        let hallwaycomp = props.defaultFloor.hallway;
        for(let i = 0; i < hallwaycomp.length; i = i + 4){
            deComp(hallwaycomp[i], hallwaycomp[i + 1], hallwaycomp[i + 2], hallwaycomp[i + 3], hallway);
        }
        updateHall(hallway);

      }, []);


    return (
        <View>
            <Floor id={1} floor={currentFloor} floorhall={hall} boxsize={boxsize}/>
            <Text>Floor ^ v</Text>
        </View>
    );
}