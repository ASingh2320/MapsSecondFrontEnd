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

    let midx = x + (width / 2);
    let midy = y + (height / 2);
    
    return (
        <G>
            <Rect x={x + ""} y={y + ""} width={width + ""} height={height + ""} fill="#FF3333"  
               strokeWidth="3" stroke="rgb(0,0,0)"/>
            <Textsvg x={midx + ""} y={midy + ""} fontSize={boxsize/2 + ""} z = {1} text-anchor="middle" fontWeight="bold" fill="black">{props.name}</Textsvg>
    
        </G>
    );
}