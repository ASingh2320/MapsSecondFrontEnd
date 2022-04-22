import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Rect, Path, Polyline, G, Text as Textsvg, ForeignObject } from 'react-native-svg';

export default function Hall(props){
    let boxsize = props.boxsize;
    let hw = props.hallbox;
    let name = (hw[0] + ", " + hw[1] + "")
    return (
        <G>
            <Rect x={hw[0] + ""} y={hw[1] + ""} width= {boxsize + ""} height={boxsize + ""} fill="blue" />
            {/*<Textsvg x={hw[0] + 25 + ""} y={hw[1] + 25 + ""} fontSize={12 + ""} z = {1} text-anchor="middle" fontWeight="bold" 
            fill="black">{name}</Textsvg>*/}
        </G>
    );
}