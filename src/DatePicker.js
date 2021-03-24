import React, {useState} from 'react';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";
import './DatePicker.css';


function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState
    (new Date());
    const [endDate, setEndDate] = useState
    (new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges)  {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelect} />
                
                
                <Button onClick={() => history.push('/search') } >Search AirBnB</Button>
        </div>
    )
}

export default Search