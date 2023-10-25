import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import d1 from '../../assests/d1.jpg';
import d2 from '../../assests/d2.jpg';
import d3 from '../../assests/d3.jpg';
import d4 from '../../assests/d4.jpg';
const Destination = () =>{
    return(
    <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opporunity to see a lot within a time frame.</p>
        
        <DestinationData
        className="first-des"
        heading="Goa , India"

        text="Goa, India – where sun, sand, and sea come together to create a paradise for all. This coastal haven on the Arabian Sea is known for its golden beaches, vibrant nightlife, and rich Portuguese heritage. Whether you seek relaxation on the shore or adventure in the water, Goa offers a unique blend of culture, cuisine, and coastal beauty, making it a must-visit destination for every traveler."

        img1={d1}
        img2={d2}
        />

<DestinationData
        className="first-des-reverse"
        heading="Bali , Indonesia"

        text="Nestled in the heart of Batangas, Philippines, lies a geological marvel that will leave you utterly spellbound: Taal Volcano. Known as An Island Within a Lake on an Island Within a Lake, it's a natural wonder that defies imagination.
        Taal Volcano isn't just a destination; it's a journey through time and nature's wonders, an adventure waiting to be experienced, and a story of resilience and beauty that will forever stay etched in your memory."

        img1={d3}
        img2={d4}
        />
    </div>
    )
}
export default Destination;