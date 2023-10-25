import './TripStyles.css';
import TripData from './TripData';
import s1 from "../../assests/s1.jpg"
import s2 from "../../assests/s2.jpg"
import s3 from "../../assests/s3.jpg"
function Trip(){
    return(
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={s1}
                heading="Trip in Indonesia"
                text="Indonesia officially the republic of Indonesia, is a country in southeast Asia and Oceania between the Indian and Pacific oceans.It consists of over 17,000 islands including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />
                <TripData
                image={s2}
                heading="Trip in Malaysia"
                text="Indonesia officially the republic of Indonesia, is a country in southeast Asia and Oceania between the Indian and Pacific oceans.It consists of over 17,000 islands including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />
                <TripData
                image={s3}
                heading="Trip in France"
                text="Indonesia officially the republic of Indonesia, is a country in southeast Asia and Oceania between the Indian and Pacific oceans.It consists of over 17,000 islands including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                />
            </div>
        </div>
    )
}

export default Trip;