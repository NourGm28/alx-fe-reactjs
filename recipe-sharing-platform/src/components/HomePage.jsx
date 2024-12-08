import { useState , useEffect } from "react"
export default function HomePage() {
    const [data, setData] = useState({})

    useEffect(() => {
            fetch('/src/data.json')
            .then(res => res.json())
            .then(data => 
                console.log(data),
                setData(data))
            .catch(err => console.error('error loading data',err));
            }, []);
            return (
                <div className="container bg-slate-300 p-5 m-3 ">
                    <h1>Recipes Sharing Platform </h1>
                    <div className="p-4 m-4">
                        {data.map(item =>(
                            <div key={item.id}>
                                <img className="rounded-md m-2"
                                src={item.image} 
                                alt={item.title} />
                                <div>
                                    <h2 className="text-slate-950 p-3 ">{item.title}</h2>
                                    <p className="text-slate-700">{item.summary}</p>
                                    <a href={'/data/${data.id}'}>Click to show recipe</a>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                )}