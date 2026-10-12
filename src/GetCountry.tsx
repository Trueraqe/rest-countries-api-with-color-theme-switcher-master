import { Link } from "react-router-dom"
import data from "../data.json"

export default function GetCountry({country}: {
    country: any,
}){

    return(
        <>
        <div>
            <Link to="/">
            <button className="bg-elem-color text-text-color p-1 lg:mt-15 m-5 mt-10 lg:ml-20 w-[100px] rounded shadow-xl hover:cursor-pointer">← Back</button>
            </Link>
        </div>
        <div className="flex-1 min-w-0 xl:flex gap-20 xl:m-20 m-10 mt-10 text-text-color items-center justify-center items-start">
            <div className="lg:w-[500px] lg:h-[300px] shrink-0">
                <img className="h-full w-full" src={country.flags.svg} alt={country.name} />
            </div>
            <div className="grid sm:p-8 p-2 gap-5">
                <div>
                    <h1 className="font-bold text-[25px]">{country.name}</h1>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-20 gap-5 text-sm [&_span]:text-gray-500">
                    <div className="flex flex-col gap-2">
                        <p>Native Name: <span>{country.nativeName ? country.nativeName : "NONE"}</span></p>
                        <p>Population: <span>{country.population ? country.population : "NONE"}</span></p>
                        <p>Region: <span>{country.region ? country.region : "NONE"}</span></p>
                        <p>Sub region: <span>{country.subregion ? country.subregion : "NONE"}</span></p>
                        <p>Capital: <span>{country.capital ? country.capital : "NONE"}</span></p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Top Level Domain: <span>{country.topLevelDomain ? country.topLevelDomain : "NONE"}</span></p>
                        <p>Currencies: <span>{country?.currencies?.map((c: any) => c.name + ", ") ? country.currencies.map((c: any) => c.name) : "NONE"}</span></p>
                        <p>Languages: <span>{country?.languages?.map((c: any) => c.name + ", ") ? country.languages.map((c: any) => c.name + ", ") : "NONE"}</span></p>
                    </div>
                </div>
                <div className="flex flex-row text-sm items-center justify-left">
                    <p>Border Countries: {data.filter(f => country?.borders?.includes(f.alpha3Code)).map((c, index) => <Link key={index} to={"/" + c.name}><button className="bg-elem-color text-text-color m-1 p-1 w-[100px] rounded shadow-xl hover:cursor-pointer">{c.name}</button></Link>)}</p>
                </div>
            </div>
        </div>
        </>
    )
}