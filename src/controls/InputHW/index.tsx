import React from 'react'
import "./index.css"
import Button from "../Button";
import Input from "../Input";
import store from "../../store";
import {observer} from "mobx-react";

function Input_HW() {
    return (
        <div className={"m_hw"}>
            <Input value={store.HW_value} class={"hw_input"} onChange={(evt: any) => store.change_HW(evt.target.value)}/>
            <Button title={"Очистить"} class={"clear"} onClick={store.clear_HW}/>
            <Button title={"Заполнить"} class={"fill"} onClick={store.fill_HW}/>
        </div>
    )
}

const InputHW = observer(Input_HW);
export default InputHW;
