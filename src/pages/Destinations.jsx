import { useEffect, useState } from "react";
// import useFetchData from "../hooks/useFetchData";

export default function Destinations() {

  // const { data, loading, fetchData } = useFetchData();
  // console.log(data);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    const response = await fetch('data.json');
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading){
    return (
      <section>
        Loading...
      </section>
    )
  }

  const destinations = data.destinations;
  const { name, description, travel, distance } = destinations[index];

  return (
    <>
      <hr />
      {destinations.map((destination, index) => (
        <button 
          key={destination.name} 
          onClick={() => setIndex(index)}
        >
          {destination.name}
        </button>
      ))}
      <article>
        <p>{name}</p>
        <p>{description}</p>
        <p>{distance}</p>
        <p>{travel}</p>
      </article>
    </>
  )
}
