import React from "react";
import {BASE_URL, API} from '../index'
import axios from 'axios'

//EXPLANATION

export default function Text({text}){
    return (
    <p className = 'explain'>{text}</p>
    )
}