import React from "react";
import {BASE_URL, API} from '../index'
import axios from 'axios'

//DATA.DATE

export default function Title(props){
    const {date} = props

    return (
        <p>{date}</p>
    )
}