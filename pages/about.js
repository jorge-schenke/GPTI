import { Typography } from "@mui/material";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";

export default function Info() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Ecomedi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pill.png" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className="bannerQuienesSomos">
            <div className="bannerBackground">
              <div className="bannerInfo">
                <h2>¿Quienes Somos?</h2>
              </div>
            </div>
          </div>

          <h3 className="titulo">Sobre Nosotros</h3>
          <p className="info">
            {" "}
            <Typography variant="body2">
              Somos una empresa dedicada a la asistencia en la compra de
              remedios y otros productos farmaceuticos, inspirados en querer
              ayudar a la mayor cantidad de personas para el ahorro de su
              dinero. Sentimos que los remedios de nuestro país son muy caros,
              por lo que debemos al menos hacer el esfuerzo para comprar al
              mejor precio posible.
            </Typography>
          </p>
          <p className="info">
            <Typography variant="body2">
              {" "}
              Estamos convencidos y creemos firmemente que nuestra aplicación
              ayudara a las personas a conseguir precios mejores a los normales
              gracias a nuestra logica.
            </Typography>
          </p>
          <p className="info">
            <Typography variant="body2">
              Lo que hacemos para conseguir los mejores precios es revisar en
              todas las paginas que tenemos accesos el producto que el usuario
              busca para luego entregarles en orden los mejores resultados.
              Esperamos poder seguir creciendo y agregar la mayor cantidad de
              farmacias posibles para hacer aún más potente esta herramienta
            </Typography>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Powered by G1 GPTI
          <span className={styles.logo}>
            <Image src="/pill.png" alt="Vercel Logo" width={20} height={20} />
          </span>
        </a>
      </footer>
    </div>
  );
}