import {useRouter} from 'next/router';
import {useState, useEffect, Fragment} from 'react'
import Link from 'next/link'
function DetailPage() {
  const router = useRouter();
  const [molecule, setMolecule] = useState([]);
  const [dft, setDFT] = useState([])
  var data = router.query.data;
  useEffect(()=>{
      function getMolecule(data){
        setMolecule(JSON.parse(data));
      } 
      if(data){
        getMolecule(data);
      }
  },[data])
  useEffect(()=>{
    const Ar = Object.entries(molecule).slice(7, 187);
    var chunks = [];
    const chunksize = 5;
    for (let i = 0; i < Ar.length; i += chunksize) {
      const chunk = Ar.slice(i, i + chunksize);
      chunks.push(chunk);
    }
    setDFT(chunks);
  },[molecule])

  return (
    <Fragment>
      <Link href='/'>
      <button style=
        {{
          float: "right",
          padding: '1%',
          marginTop: "2%",
          marginRight: "5%",
          fontSize: "xx-large",
          border: "solid black 5px",
          borderRadius: "0.3rem",
        }}>Home</button>
      </Link>
      <div
        style={{ margin: "2%", backgroundColor: "white", width: "fit-content", border:'solid black 3px', padding:'1%'}}
      >
        <h2>Symbol = {molecule.sym}</h2>
        <h2>Spin Orbit Correction = {molecule.SO} Hartrees</h2>
        <h2>
          Heat of formation at 0K &#8710;H<sub>f</sub>&#176;(<i>X</i>,0K) ={" "}
          {molecule.dho} kcal/mol
        </h2>
        <h2>
          Enthalpy correction H<sup>&#176;</sup>(298 K) - H<sup>&#176;</sup>(0
          K) = {molecule.dht} kcal/mol
        </h2>
        <h2>
          Alfa e<sup>-</sup> {molecule.alfa} | Beta e<sup>-</sup>{" "}
          {molecule.beta}
        </h2>
      </div>

      <table style={{ margin: "auto" }}>
        <tbody>
          <th colspan="10">Hartree-Fock Density Functional Theory Energies </th>
          {dft.map((item, index) => {
            console.log(item);
            return (
              <tr>
                {item.map((item, index) => {
                  return (
                    <>
                      <td>{item[0].slice(0, -3)}</td>
                      <td>{item[1].toPrecision(8)}</td>
                    </>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
export default DetailPage;
 