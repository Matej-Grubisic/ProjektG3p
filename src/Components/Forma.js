import { React } from "react";
import "./styles1.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Forma({ dodaj }) {
  const [drzava, setDrzava] = useState(" ");
  const [unos, setUnos] = useState(" ");
  const brojac = useRef();
  const [counter, setCounter] = useState();

  const Unosenje = (primljen) => {
    setUnos(primljen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Unosenje(drzava);
    dodaj(drzava, brojac.current);
  };

  useEffect(() => {
    brojac.current = brojac.current + 1;
    setCounter((counterTwo) => counterTwo + 1);
  }, [unos]);

  useEffect(() => {
    brojac.current = 0;
    setCounter(0);
  }, []);

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <label className="div1dobar">Vaša država?</label>
        <br />
        <input type="text" onChange={(e) => setDrzava(e.target.value)} />
        <br />
        <Button variant="danger" type="submit">
          Peticija proširenja
        </Button>
        <div className="div1dobar">
          Unosa: <br />
          {brojac.current}
        </div>
      </form>
    </div>
  );
}
