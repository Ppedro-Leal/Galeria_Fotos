'use client'

import { useState } from "react";
import PhotoCard from "./FotoCards";
import SearchBar from "./BarraPesquisa";
import { photos } from "../fotos/fotos";

const Gallery = () => {
  const [query, setQuery] = useState("");

  const fotos_filtradas = photos.filter((photo) =>
    photo.titulo.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {fotos_filtradas.length > 0 ? (
          fotos_filtradas.map((photo) => (
            <PhotoCard key={photo.id} titulo={photo.titulo} url={photo.url} />
          ))
        ) : (
          <p className="text-center col-span-full">Nenhuma foto encontrada</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;