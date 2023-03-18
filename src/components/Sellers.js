import React, { useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import SearchBox from './Search/Search';
import Card from './Card/Card';
import FetchData from './FetchData';

const dataURL = 'https://dev.mentorclan.com/api/mentors';

function Sellers() {
    const { data } = useSelector((state) => state.custom);
    const [input, setInput] = useState("");
    const [filterData, setFilterData] = useState("");

    const SetInputData = (e) => {
        setInput(e.target.value);
    };
    useEffect(() => {
        setFilterData(
            data.filter((elem) => {
                return elem.name
                    .toLocaleLowerCase()
                    .includes(input.toLocaleLowerCase());
                })
        );
    },[input, data]);
  return (
    <>
    <FetchData/>
    <SearchBox input={input} SetInputData={SetInputData}/>
    <Card filterData={filterData}/>
    </>
  )
}

export default Sellers