import { useState } from "react";
import FilteredData from "./FilteredData";

export default function GetAllCountries() {

      const [filter, setFilter] = useState('');
      const [country, setCountry] = useState('');
    
      const handleChangeFilter = (
            e: React.ChangeEvent<HTMLSelectElement>,
        ) => {
            setFilter(e.target.value);
        };
    
      const handleChangeSearch = (
        e: React.ChangeEvent<HTMLInputElement>,
      ) => {
        setCountry(e.target.value)
      };
      
  return (
    <>
    <div className='sm:flex sm:items-center sm:justify-between lg:mt-10 mt-2'>
        <label htmlFor="search" className="sr-only">Search for a country</label>
        <input id="search" type="search" placeholder='Search for a country...' onChange={handleChangeSearch} className='bg-elem-color p-3 lg:ml-20 lg:m-5 rounded text-text-color w-[calc(100%-1rem)] sm:w-[375px] m-2' />

        <label htmlFor="region" className="sr-only">Filter by Region</label>
        <select id="region" name="region" onChange={handleChangeFilter} className='bg-elem-color p-3 lg:mr-20 lg:m-5 m-2 rounded text-text-color w-[200px]'>
          <option value="" hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
    </div>
    <FilteredData filter={filter} country={country}/>
    </>
    );
}