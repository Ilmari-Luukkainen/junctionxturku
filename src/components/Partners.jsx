
import Card from "./Card";
import "./Partners.css"

const PARTNERS = [
  { 
    name: "Junction",
    logo: "./JUNCTIONx_logos-wordmark-white.svg"
  },
  { 
    name: "aaes",
    logo: "/aaes.webp"
  },
  { 
    name: "Junction",
    logo: "./JUNCTIONx_logos-wordmark-white.svg"
  },
   { 
    name: "aaes",
    logo: "./aaes.webp"
  },
  { 
    name: "Junction",
    logo: "./JUNCTIONx_logos-wordmark-white.svg"
  },
  { 
    name: "aaes",
    logo: "./aaes.webp"
  },
   { 
    name: "Junction",
    logo: "./JUNCTIONx_logos-wordmark-white.svg"
  },
  { 
    name: "aaes",
    logo: "./aaes.webp"
  },
  
];

const PARTNERS_DUPLICATED = [...PARTNERS, ...PARTNERS]; 

const Partners = () => {
    return(
        <section className="partners">
          <h4 id="our-partners">Our Partners:</h4>
          <div className="carousel">
            {/* Lisätty toinen grid saumattomuuden varmistamiseksi jos teksti on lyhyt */}
            <div className="partners-grid">
                { PARTNERS_DUPLICATED.map((partner, idx) => (
                    <div className="partner-card" key={idx}>
                      <img src={partner.logo} alt={partner.name} style={{ height: '40px' }} />
                    </div>
                ))}
            </div>
          </div>
        </section>
    );
}


export default Partners;