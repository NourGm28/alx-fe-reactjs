import { useState , useEffect } from "react"
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [data, setData] = useState([]);

    // const RecipeCard = ({ recdata }) => (
    //     <div className="border rounded p-4">
    //     <h3 className="text-xl font-bold">{recdata.title}</h3>
    //     <img src={recdata.image} alt={recdata.title} className="w-full h-48 object-cover rounded mb-2" />
    //     <Link to={`/src/data.json/${recdata.id}`} className="text-blue-500 underline">
    //         View Details
    //     </Link>
    //     </div>
    // );

    useEffect(() => {
            fetch('/src/data.json')
            .then(res => res.json())
            .then(data => {
                console.log('Fetched Data',data);
                setData(Array.isArray(data)? data : data.recipes || []);
            })
            .catch(err => console.error('error loading data',err));
            }, []);
            
            return (
                <div className="container bg-white p-5 m-3 grid-flow-col grid-cols-1, grid-cols-2, grid-cols-3, items-center, items-stretch, items-center sm shadow-lg">
                    <h1 className="text-orange-800 mt-3-3 font-semibold">Recipes Sharing Platform </h1>
                    <div className="p-4 m-4">
                        {data.map(item =>(
                            <div key={item.id}>
                                <img className="rounded-md  m-2 grid-flow-col items-center text-center justify-center"
                                src={item.image} 
                                alt={item.title} />
                                <div>
                                    <h2 className="text-slate-950 p-3 text-lg font-bold">{item.title}</h2>
                                    <p className="text-slate-500 m-3" >{item.summary}</p>
                                    <a className="no-underline text-black p-2 m-5 rounded-md hover:text-amber-100 bg-orange-300 w-3 h-3" href={'/data/${data.id}'}>Click to show recipe</a>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                )}