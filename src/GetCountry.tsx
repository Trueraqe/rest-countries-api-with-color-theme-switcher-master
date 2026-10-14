import { Link } from "react-router-dom"
import data from "../data.json"

export default function GetCountry({country}: {
    country: any,
}){

    return(
        <>
        <div className="lg:mt-15 m-5 mt-10 lg:ml-20">
            <Link to="/" className="bg-elem-color text-text-color p-2 pl-3 pr-3 w-[100px] rounded shadow-xl hover:cursor-pointer">← Back</Link>
        </div>
        <div className="flex-1 min-w-0 xl:flex gap-20 xl:m-20 m-10 mt-10 text-text-color items-center justify-center items-start">
            <div className="lg:w-[500px] lg:h-[300px] shrink-0">
                <img className="h-full w-full" src={country.flags.svg} alt={country.name} />
            </div>
            <div className="grid sm:p-8 p-2 gap-5">
                <div>
                    <h1 className="font-bold text-[25px]">{country.name}</h1>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-20 gap-5 text-sm [&_span]:font-light">
                    <div className="flex flex-col gap-2">
                        <p>Native Name: <span>{country.nativeName ? country.nativeName : "NONE"}</span></p>
                        <p>Population: <span>{country.population.toLocaleString("en-US")}</span></p>
                        <p>Region: <span>{country.region ? country.region : "NONE"}</span></p>
                        <p>Sub region: <span>{country.subregion ? country.subregion : "NONE"}</span></p>
                        <p>Capital: <span>{country.capital ? country.capital : "NONE"}</span></p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Top Level Domain: <span>{country.topLevelDomain ? country.topLevelDomain : "NONE"}</span></p>
                        <p>Currencies: <span>{country.currencies?.map((c: { name: string }) => c.name).join(", ") ?? "NONE"}</span></p>
                        <p>Languages: <span>{country.languages?.map((c: { name: string }) => c.name).join(", ") ?? "NONE"}</span></p>
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] text-sm items-center justify-left text-center">
                    <p className="text-left">Border Countries: </p>
                    {data.filter(f => country.borders?.includes(f.alpha3Code)).map((c, index) => <Link key={index} to={"/" + c.name} className="bg-elem-color text-text-color m-1 p-1  rounded shadow-xl hover:cursor-pointer p-2">{c.name}</Link>)}
                </div>
            </div>
        </div>
        </>
    )
}