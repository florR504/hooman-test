import Head from "next/head";
import FilteredCharacterTable from "@/components/FilteredCharactersTable";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character/"
        );
        const data = await response.json();
        console.log(data);
        setCharacters(data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchApi();
  }, []);

  return (
    <>
      <Head>
        <title>Hooman Test</title>
      </Head>
      <FilteredCharacterTable characters={characters} />
    </>
  );
}
