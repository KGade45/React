import {useState, useEffect} from 'react';

const useCurrencyInfo = (currency)=>{
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
    }, [currency])
    return data;
}

//const [height,setHeight] = useState(0);
//Here the useState is an function
//so when we return the useCurrency function and when it is called like const variable = useCurrencyInfo(parameter)

export default useCurrencyInfo;