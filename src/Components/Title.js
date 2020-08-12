import React, { useEffect } from "react";
import {BASE_URL, API} from '../index'
import axios from "axios";

//DATA.TITLE

export default function Date(props){
    const {title} = props

    return (
        <h1 className = 'title'>{title}</h1>
    )
}