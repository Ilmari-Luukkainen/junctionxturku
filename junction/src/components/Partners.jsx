
import Card from "./Card";
import "./Partners.css"

const PARTNERS = [
  { 
    name: "Junction",
    logo: "/JUNCTIONx_logos-wordmark-white.svg"
  },
  { 
    name: "Junction",
    logo: "/JUNCTIONx_logos-wordmark-white.svg"
  },
  { 
    name: "Junction",
    logo: "/JUNCTIONx_logos-wordmark-white.svg"
  },
  



];

const PARTNERS_DUPLICATED = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

const Partners = () => {
    return(
        <section className="partners">
          <h4 id="our-partners">Our Partners:</h4>
          <div className="carousel">
            <div className="partners-grid">
                { PARTNERS_DUPLICATED.map((partner, idx) => (
                    <Card image={partner.logo} name={partner.name} key={idx}/>
                ))
              }
            </div>
          </div>
        </section>
    );
}


export default Partners;