import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LoadingScreen } from "../components/LoadingScreen.js";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";

export default function Home() {
  const llamarApi = async (query) => {
    try {
      setLoading(true);
      const resp = await fetch(`/api/${query}`);
      const respJson = await resp.json();
      const respJsonList = respJson.dataList;
      respJsonList.sort(function (a, b) {
        return a.price - b.price;
      });

      setRemedios(respJsonList);
      setLoading(false);
    } catch {
      setError(true);
    }
  };

  const llamadaEjemplo = async () => {
    await llamarApi(query);
  };

  const limpiarRemedios = async () => {
    setRemedios([]);
  };

  const mostrarMas = async () => {
    let total = remedios.length;
    if (cantidad + 3 > total) {
      setCantidad(total - cantidad);
    }
    setCantidad((prev) => prev + 3);
  };

  const [query, setQuery] = useState("");
  const [remedios, setRemedios] = useState([]);
  const [cantidad, setCantidad] = useState(3);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  if ((remedios.length === 0) & !loading) {
    return (
      <div className={styles.container}>
        <Navbar />
        <Head>
          <title>BuscaFarm</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/pill.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title} id="welcome">¡Bienvenido a BuscaFarm!</h1>
          <p className={styles.description}>
            ¡Ingresa el nombre de un medicamento y te daremos las opciones más
            económicas del mercado!
          </p>

          <TextField
            id="outlined-basic"
            label="Ingresa aca tu remedio"
            variant="outlined"
            onChange={handleChange}
          />
          <br />
          <Button variant="contained" onClick={llamadaEjemplo}>
            Buscar
          </Button>
        </main>

        <footer className={styles.footer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by G1 GPTI
            <span className={styles.logo}>
              <Image
                src="/pill.png"
                alt="Vercel Logo"
                width={20}
                height={20}
              />
            </span>
          </a>
        </footer>
      </div>
    );
  } else if (loading) {
    return (
      <div className={styles.container}>
        <Navbar />
        <Head>
          <title>BuscaFarm</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title} id="loading">Buscando los mejores precios</h1>
          <LoadingScreen />
        </main>

        <footer className={styles.footer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by G1 GPTI
            <span className={styles.logo}>
              <Image
                src="/pill.png"
                alt="Vercel Logo"
                width={20}
                height={20}
              />
            </span>
          </a>
        </footer>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <Navbar />
        <Head>
          <title>BuscaFarm</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/pill.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title} id="results">Resultados</h1>

          <ProductList remedios={remedios.slice(0, cantidad)} />
          {remedios.length !== cantidad ? (
            <Button variant="contained" onClick={mostrarMas}>
              Mostrar más resultados
            </Button>
          ) : null}
          <br />
          <Button variant="contained" onClick={limpiarRemedios}>
            Buscar otro remedio
          </Button>
        </main>

        <footer className={styles.footer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by G1 GPTI
            <span className={styles.logo}>
              <Image
                src="/pill.png"
                alt="Vercel Logo"
                width={20}
                height={20}
              />
            </span>
          </a>
        </footer>
      </div>
    );
  }
}
