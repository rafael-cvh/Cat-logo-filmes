import { useState, useEffect } from "react";
import { link } from "react-router-dom"

type Filme = {
    id: number,
    url: string,
    language: string,
    name: string,
    genres: string,

};

export default function Home() {
    const [ filme, setFilme ] = useState<Filme[]>([]);


    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
        .then((res) =>res.json())
        .then((response) => setFilme(response.filme));
    },[]);

    return (
        
    );
}