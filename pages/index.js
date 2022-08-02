import {useState, useEffect, Fragment} from 'react'
import Link from 'next/link'

function HomePage(){
  const [atoms, setAtoms] = useState([])
  
  useEffect(()=>{
    async function getAtoms(){
      await fetch('./api/atoms').then(response => {return response.json()}).then(values=>{setAtoms(values)})
    }
    getAtoms()
  },[])
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
      }}
    >

      {atoms.map((item, index) => {
        return (
          <Link
          key={index}
            href={{
              pathname: `/atoms/${item.sym}`,
              query: { data: JSON.stringify(item) },
            }}
          >
            <div
              className="card-container"
              key={index}
              id={index}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
              onMouseOver={() => {
                var doc = document.getElementById(index);
                doc.style.backgroundImage = `url(${item.img})`;
                doc.style.color = "white";
                doc.style.border = "solid black 5px";
              }}
              onMouseOut={() => {
                var doc = document.getElementById(index);
                doc.style.backgroundImage = ``;
                doc.style.color = "black";
                doc.style.border = "solid black 3px";
              }}
            >
              <div className="text">{item.sym}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default HomePage;