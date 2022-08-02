import '../styles/globals.css'
import "../styles/cards.css";
import { AiFillGithub } from "react-icons/ai";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <div style={{ padding: "0.5%" }}>
          <img style={{width:'3.5%'}} src="https://www.ic.unicamp.br/~stolfi/EXPORT/projects/ic-logos/2010-03-16/logotipos/png/logo-unicamp-name-line-blk-red-0480.png"></img>
        </div>
      </header>
      <div
        style={{
          width: "90%",
          margin: "auto",
        }}
      >
        <img
          src={`https://i0.wp.com/compphys.go.ro/wp-content/uploads/2017/11/KohnSham.png?fit=1095%2C168&ssl=1`}
          style={{
            width: "100%",
            height: "250px",
            border: "dotted black 5px",
          }}
        ></img>
      </div>
      <Component {...pageProps} />
      <footer>
        <div style={{ padding: "0.5%" }}>
          <span style={{ fontSize: "xxx-large", visibility: "hidden" }}>
            <AiFillGithub />
          </span>
          <a href="#" target={"_blank"}>
            <AiFillGithub />
          </a>
          <span style={{ fontSize: "xxx-large", visibility: "hidden" }}>
            <AiFillGithub />
          </span>
        </div>
      </footer>
    </>
  );
}

export default MyApp
