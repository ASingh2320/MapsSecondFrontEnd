import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Rect, Path, Polyline, G, Text as Textsvg, ForeignObject } from 'react-native-svg';

export default function Hall(props){
    let boxsize = props.boxsize;
    let hw = props.hallbox;
    return (
        <Rect x={hw[0] + ""} y={hw[1] + ""} width= {boxsize + ""} height={boxsize + ""} fill="blue" />
    );
}