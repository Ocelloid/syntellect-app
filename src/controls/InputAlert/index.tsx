import React from 'react'
import "./index.css"
import Button from "../Button";
import Input from "../Input";
import store from "../../store";
import {observer} from "mobx-react";

function Input_Alert() {
    return (
        <div className={"m_alert"}>
            <Button title={"Вывести число"} class={"num"} onClick={store.number_A}/>
            <Input value={store.A_value} onChange={(evt: any) => store.change_A(evt.target.value)}/>
            <Button title={"Вывести"} class={"alt"} onClick={store.alert_A}/>
        </div>
    )
}

const InputAlert = observer(Input_Alert);
export default InputAlert;
