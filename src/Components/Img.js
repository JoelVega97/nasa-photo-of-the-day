import React from "react";
import {BASE_URL, API} from '../index'
import axios from 'axios'

//URL

export default function Img({url}){
    return (
        <img src = {url} alt = {'suns path along ecliptic'} height = {500}></img>
    )
}