import React, {Component} from 'react'
import {observer} from 'mobx-react'
import "./index.css"
import Input from "../Input";
import {CountryInfo, getCountryByName} from "../../api/apiService";
import {action, makeAutoObservable, observable} from "mobx";

class Country_store {
    country_value = '';
    countries_state = "pending";
    countries_found: CountryInfo[] = [];
    countries_show = false;

    constructor() {
        makeAutoObservable(this)
    }

    change_CW = (val: string) => {
        this.country_value = val;
        this.fetchCountries(val);
    }

    fetchCountries = (val: string) => {
        this.countries_found = []
        this.countries_state = "pending"
        getCountryByName(val).then(
            action("fetchSuccess", countries => {
                console.log(countries)
                this.countries_found = countries
                this.countries_state = "done"
                this.showCountries();
            }),
            action("fetchError", error => {
                this.countries_state = "error"
            })
        )
    }

    showCountries = () => {
        if (!!this.countries_found.length) {
            if (this.countries_found.length > 1) {
                this.countries_show = true;
            }
            else this.countries_show = this.countries_found[0].fullName !== this.country_value;
        }
        else this.countries_show = false;
    }
}

@observer
export default class Input_Country extends Component<any, any>{
    @observable store = new Country_store();

    constructor(props: any) {
        super(props);
        this.state = {
            maxItems: this.props.maxItems || 10
        }
    }
    render() {
        return <div className={"m_country_wrapper"}>
            <Input
                value={this.store.country_value}
                onChange={(evt: any) => this.store.change_CW(evt.target.value)}
                class={"m_country_input"}/>
            {(this.store.countries_show && this.store.countries_state === 'done') && <div className={"m_country_list"}>
                {this.store.countries_found.slice(0, this.state.maxItems).map((country, index) =>
                    <p onClick={() => this.store.change_CW(country.fullName)} className={"m_country_element"} key={index}>
                        <img src={country.flag}/> <span>{country.name} ({country.fullName})</span>
                    </p>)}
            </div>}
        </div>
    }
}
