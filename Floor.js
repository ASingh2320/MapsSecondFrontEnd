import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Room from './Room';
import Svg, { Circle, Rect, Path, Polyline, G, Text as Textsvg, ForeignObject } from 'react-native-svg';
import Hall from './Hall';

export default function Floor(props){
    let rooms = props.floor.rooms;
    let [halls, updateHall] = useState([]);
    let boxsize = props.boxsize;

    const deComp = (lowx, lowy, highx, highy, arr) => {
        for(let i = lowx; i < highx + 1; i++){
            for(let j = lowy; j < highy + 1; j++){
                arr.push([i * boxsize, j * boxsize]);
            }
        }
    }
    useEffect(() => {
        console.log("Use Effect triggered")
        let hblock = [];
        let hallcomp = props.floorhall;
        for(let i = 0; i < hallcomp.length; i = i + 4){
            deComp(hallcomp[i], hallcomp[i + 1], hallcomp[i + 2], hallcomp[i + 3], hblock);
        }
        console.log(hblock);
        updateHall(hblock);
      }, [props.floorhall]);


    return (
        <View>
            <Svg height={(boxsize * boxsize) / 2} width={(boxsize * boxsize)/2}>
                {rooms.map(x => <Room key={x.name} name = {x.name} block = {x.block} door = {x.door} boxsize={boxsize}/>)}
                {halls.map(hw => <Hall key={hw[0] +" " + hw[1]} boxsize={boxsize} hallbox={hw}/>)}
            </Svg>
        </View>
    );
}