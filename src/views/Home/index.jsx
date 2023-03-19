import React from "react";
import "./index.scss";
import StoreSection from "../../componentes/StoreSection/StoreSection";
import Footer from "../../componentes/Footer/Footer";
import { useEffect } from "react";
import StoreHeader from "../../componentes/StoreHeader/StoreHeader";

export default function Home({ data }) {
  function descerPagina() {
    window.scrollTo(0, 150);
  }

  useEffect(() => {
    descerPagina();
  }, []);

  return (
    <div>
      <StoreHeader />
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

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
