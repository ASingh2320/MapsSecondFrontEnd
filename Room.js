import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Rect, Path, Polyline, G, Text as Textsvg, ForeignObject } from 'react-native-svg';

export default function Room(props){
    let boxsize = props.boxsize;
    let [roomblock, updateRoom] = useState([]);
    let block = props.block;
    let x = block[0] * boxsize;
    let y = block[1] * boxsize;
    //Formulas 
    let width = (block[2] - block[0] + 1) * boxsize;
    let height = (block[3] - block[1] + 1) * boxsize;

    console.log(x + " " + y + " " + width + " " + height);
    
    const deComp = (lowx, lowy, highx, highy, arr) => {
        for(let i = lowx; i < highx + 1; i++){
            for(let j = lowy; j < highy + 1; j++){
                arr.push([i * boxsize, j * boxsize]);
            }
        }
    }

    useEffect(() => {
        let rblock = [];
        let roomcomp = props.block;
        for(let i = 0; i < roomcomp.length; i = i + 4){
            deComp(roomcomp[i], roomcomp[i + 1], roomcomp[i + 2], roomcomp[i + 3], rblock);
        }
        console.log(rblock);
        updateRoom(rblock);

      }, []);

    return (
        <G>
            {//Incorrect with borders
            <Rect x={x + ""} y={y + ""} width={width + ""} height={width + ""} fill="#FF3333"  
                strokeWidth="3" stroke="rgb(0,0,0)"/>}
            {//Correct with no borders
            /*roomblock.map(block => 
                <Rect x={block[0] + ""} y={block[1] + ""} width={boxsize + ""} height={boxsize + ""} fill="#FF3333" />
            )*/}
        </G>
    );
}