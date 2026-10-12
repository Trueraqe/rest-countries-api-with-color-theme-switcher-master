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
        <input onChange={handleChangeSearch} className='bg-elem-color p-3 lg:ml-20 lg:m-5 m-2 rounded text-text-color sm:w-[375px] w-[360px]' type="text" placeholder='🔍   Search for a country...'/>
        <select onChange={handleChangeFilter} className='bg-elem-color p-3 lg:mr-20 lg:m-5 m-2 rounded text-text-color w-[200px]' name="region" id="region">
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