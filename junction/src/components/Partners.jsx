
import Card from "./Card";

const PARTNERS = [
  { 
    name: "Turun kaupunki",
    logo: "/turunkaupunki_logo.png"
  },
  { 
    name: "Business Turku",
    logo: "/businessturku_logo.png"
  },
  {
    name: "Oskarin suolakurkku",
    logo: "/suolakurkku.png"
  },
  {
    name: "Felix sinappi",
    logo: "/felix_logo.png"
  },
  {
    name: "Patrikin nakki ja vene",
    logo: "/nakki.png"
  },
];

const PARTNERS_DUPLICATED = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

const Partners = () => {
    return(
        <section className="partners">
          <h3 id="our-partners">Our Partners</h3>
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