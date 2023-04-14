import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cards from './Cards';

const Countries = () => {

    const [data, setData] = useState([]);
    const [sortData, setSortData] = useState([]);
    const [rangeValue, setRangeValue] = useState([36]);



    useEffect(() => {
        axios.get(
            "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
        ).then((res) => {
            setData(res.data);
        })


        const sortedCountry = () => {

            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population
            })

            sortedArray.length = rangeValue;
            setSortData(sortedArray);

        }
        sortedCountry();
    }, [data,])

    return (
        <div className='countries'>
            <div className='countries-liste'>
                {sortData.map((country) => (
                    <Cards country={country} key={country.name} />
                ))}

            </div>
        </div>
    );
};

export default Countries;