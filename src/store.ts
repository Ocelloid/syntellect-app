import {makeAutoObservable} from "mobx";

class Store {
    HW_value = '';
    A_value = '';
    constructor() {
        makeAutoObservable(this)
    }
    clear_HW = () => {
        this.HW_value = "";
    }
    fill_HW = () => {
        this.HW_value = "Hello World";
    }
    change_HW = (val: string) => {
        this.HW_value = val;
    }

    change_A = (val: string) => {
        this.A_value = val;
    }
    alert_A = () => {
        alert(this.A_value)
    }
    number_A = () => {
        if (!isNaN(parseFloat(this.A_value))) this.alert_A()
    }

}

const store = new Store();
export default store;
