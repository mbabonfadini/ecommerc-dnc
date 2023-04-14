import React from "react";
import "./index.scss";
import StoreSection from "../../componentes/StoreSection";
import { useEffect } from "react";


export default function Home({ data }) {
  function descerPagina() {
    window.scrollTo(0, 150);
  }

  useEffect(() => {
    descerPagina();
  }, []);

  return (
    <div>
      <section>
        <img
          src="ad.svg"
          alt="Anúncio"
          style={{
            width: "100%",
            margin: 0,
          }}
        />

        {data.map((item, key) => (
          <StoreSection data={item} key={key} />
        ))}
      </section>
    </div>
  );
}