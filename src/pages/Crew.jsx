import { useEffect, useState } from "react";

export default function Crew() {

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

  const crew = data.crew;
  const { name, role, bio } = crew[index];

  return (
    <>
      <hr />
      {crew.map((crewMember, index) => (
        <button 
          key={crewMember.name}
          onClick={() => setIndex(index)}
        ></button>
      ))}
      <article>
        <p>{name}</p>
        <p>{role}</p>
        <p>{bio}</p>
      </article>
    </>
  )
}
