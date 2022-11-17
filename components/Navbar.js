import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand" style={{ marginLeft: "3%" }} data-cy="logo">
          BuscaFarm <Image src={"/pill.png"} alt="BuscaFarm_logo" width="30" height="30" data-cy="image"/>
        </a>
      </Link>
      <div className="container-xl">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          {router.asPath === "/" ? (
            <ul className="navbar-nav mr-auto" style={{ marginLeft: "85%" }}>
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link active" data-cy="home-active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link" data-cy="about">AboutUs</a>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mr-auto" style={{ marginLeft: "85%" }}>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" data-cy="home">Home</a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/about">
                  <a className="nav-link active" data-cy="about-active">AboutUs</a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </Nav>
  );
}
