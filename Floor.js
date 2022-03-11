import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Room from './Room';
import Svg, { Circle, Rect, Path, Polyline, G, Text as Textsvg, ForeignObject } from 'react-native-svg';
import Hall from './Hall';

export default function Floor(props){
    let rooms = props.floor.rooms;
    let halls = props.floorhall;
    let boxsize = props.boxsize;
    return (
        <View>
            <Svg height="500" width="1100">
                {rooms.map(x => <Room key={x.name} name = {x.name} block = {x.block} door = {x.door} boxsize={boxsize}/>)}
                {/*halls.map(hw => <Hall key={hw[0] +" " + hw[1]} boxsize={boxsize} hallbox={hw}/>)*/}
            </Svg>
        </View>
    );
}