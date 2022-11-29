// import { useEffect, useState } from "react"


// export default function useFetchData() {

//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
        
//     const fetchData = async () => {
//         const response = await fetch('data.json');
//         const data = await response.json();
//         setData(data);
//         setLoading(false);
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     if (loading){
//         return (
//           <section>
//             Loading...
//           </section>
//         )
//     }

//     return { data, loading, fetchData };
// }
