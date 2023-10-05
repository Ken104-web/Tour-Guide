import { useEffect, useState } from "react";
import {   useParams } from "react-router-dom"


function Site(){
        const [ sites, setSites] = useState({})
        const { id } = useParams();
        const [visitorCount, setVisitorCount] = useState(0);

        useEffect(() => {
            fetch(`/api/sites/${id}`)
            .then(resp => resp.json())
            .then(data => {
                // console.log(data);
                setSites(data)
            })
        }, [id]);
        console.log(sites);

        const countNoOfVisitors = () => {
            setVisitorCount((lastCount) => lastCount + 1);
        }

        return(
            <div>
                <h2>Site Details:</h2>
                
                    {/* {sites.map((review) => (
                        <p key={sites.id}>
                        </p> */}
                        <p>Location: {sites.location}</p>
                        <p>Description: {sites.description}</p> 
                    <p>Rating: {sites.rating}</p>
                
                <button onClick={countNoOfVisitors}>
                    Tap if you like the info
                </button>
                <p>Like Count: {visitorCount}</p>
            </div>
        )
}

export default Site;
