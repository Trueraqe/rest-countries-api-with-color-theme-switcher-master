import { Link } from "react-router-dom";
import data from "../data.json";

export default function FilteredData({filter, country}:{
    filter: string,
    country: string
}){
    const filtered = filter ? data.filter(f => f.region == filter).filter(f => f.name.toLowerCase().includes(country.toLowerCase())) : data.filter(f => f.name.toLowerCase().includes(country.toLowerCase()));

    return(
    <>
    <div className="grid md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:w-auto w-[220px] gap-10 lg:m-20 lg:mt-10 m-auto mt-10 md:m-5 text-text-color">
        {filtered.map((c, index) =>
            <div key={index}>
                <div className="h-[130px] w-full">
                    <Link to={"/" + c.name}><img className="rounded-t-[5px] h-full w-full" src={c.flags.png} alt={c.name}/></Link>
                </div>
                <div className="bg-elem-color p-5 h-[150px] w-full rounded-b-[5px]">
                    <h5 className="font-bold pb-2">{c.name ? c.name : "NONE"}</h5>
                    <p className="text-sm">Population: {c.population ? c.population : "NONE"}</p>
                    <p className="text-sm">Region: {c.region ? c.region : "NONE"}</p>
                    <p className="text-sm">Capital: {c.capital ? c.capital : "NONE"}</p>
                </div>
            </div>
        )}
    </div>
    </>
)}