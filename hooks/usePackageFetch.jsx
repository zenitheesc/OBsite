import { useState, useEffect } from 'react';

const packageState = {
    totalPackages: 0,
    packagesList: [],
};

const initialTemplate = {
    teamID: 0,
    data: {
        intValue: 0,
        floatValue: 0.0,
        stringValue: ""
    }
}

export const usePackageFetch = () => {
    const [template, setTemplate] = useState(initialTemplate);
    const [packages, setPackages] = useState([packageState]);
    const [searchingPackages, setSearchingPackages] = useState(false);
    const [error, setError] = useState(false);
    const [viewFormat, setViewFormat] = useState("");

    useEffect(() => {
        //define template (upload arquivo json e id da equipe)
    }, [])

    useEffect(() => {
        //busca por pacotes
    }, [template])

    useEffect(() => {
        //muda formato de exibição
    }, [viewFormat])
}

/*
packagesList: [
    package: {
        id: int,
        binary: [],
        data:{},
        time: int
    }, ...
]
*/

//precisa armazenar os pacotes de cada busca, ou guarda por busca?