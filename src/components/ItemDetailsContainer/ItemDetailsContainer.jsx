import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailsContainer = () => {
  const [detail, setDetail] = useState({});


  const { id } = useParams();

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontro el producto");
        }

        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => p.id === id); //Usamos el param para comparar el id del producto en el json
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </main>
  );
};