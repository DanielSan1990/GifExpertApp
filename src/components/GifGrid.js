import React from "react";
import { useFetchGifg } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifg(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Cargando...</p>}
      <div className="card-grid">
        {
          //Desatruturamos el array images para obtener el id y el title
          data.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })
        }
      </div>
    </>
  );
};
