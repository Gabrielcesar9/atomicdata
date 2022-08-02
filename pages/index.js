import {useState, useEffect, Fragment} from 'react'
import { MongoClient } from "mongodb";
import Link from 'next/link'

function HomePage(props){
  const atoms = JSON.parse(props.dft)
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
export async function getStaticProps(){
  const client = await MongoClient.connect(
    "mongodb+srv://212083:ForIonia@achilles.ckale.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("G305");
  const collection = db.collection("atomb3lyp631gd");
  const data = await collection.find().toArray();
  const sorted = await data.sort((a, b) => {
    if (parseInt(a.Z) < parseInt(b.Z)) {
      return -1;
    }
  });
  return{
  props:{
    dft:JSON.stringify(sorted)}
  }
  }

export default HomePage;