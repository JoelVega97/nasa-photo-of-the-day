import React from "react";
import {BASE_URL, API} from '../index'
import axios from 'axios'

//COPYRIGHT

export default function copyright({cc}){
    return (
    <p className = 'copyright'>{cc}</p>
    )
}