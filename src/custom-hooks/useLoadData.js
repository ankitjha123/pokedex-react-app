import React from "react"

export const useLoadData = (queryParam) => {
    const [data, setData] = React.useState({
        loading: false,
        pokeData: {},
        errorState: false
    });
    React.useEffect(() => {
        if(queryParam) {
            setData((prevData) => {return {...prevData, loading: true }});
            fetch(`https://pokeapi.co/api/v2/pokemon/${queryParam}`).then((res) => {
                return res.json()
            }).then((data) => {
                setData((prevData) => {return {...prevData, loading: false, pokeData: data, errorState: false}});
                return data
            }).catch((err) => {
                console.log(err);
                setData((prevData) => {return {...prevData, loading: false, pokeData: [], errorState: true}});
            })
        }
    },[queryParam])

    return data;
}