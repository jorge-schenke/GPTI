import React from "react";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand" style={{ marginLeft: "3%" }}>
          Ecomedi <img src={"/pill.png"} width="30" height="30" />
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
            <ul className="navbar-nav mr-auto" style={{ marginLeft: "92%" }}>
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link active">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">AboutUs</a>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mr-auto" style={{ marginLeft: "92%" }}>
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/about">
                  <a className="nav-link active">AboutUs</a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </Nav>
  );
}
