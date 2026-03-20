import { useEffect, useRef } from "react";
import Card from "./Card";

const PARTNERS = [
  { 
    name: "Turun kaupunki",
    logo: "junction\public\turunkaupunki_logo.png"
  },
  { 
    name: "Business Turku",
    logo: "junction\public\businessturku_logo.png"
  },
  {
    name: "Oskarin suolakurkku",
    logo: "junction\public\turunkaupunki_logo.png"
  },
  {
    name: "Felix sinappi",
    logo: "junction\public\felix_logo.png"
  },
];

const Partners = ({PARTNERS}) => {
    return(
        <section className="partners">
            <div className="absolute left-0 flex gap-4">
                { PARTNERS.map((partner,idx) => (
                    <Card image={partner.image} key={idx}/>
                ))
              }
            </div>
        </section>
    );
}

export default Partners;