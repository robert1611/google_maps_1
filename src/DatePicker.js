import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import Moment from "moment";
import { extendMoment } from "moment-range";
import './DatePicker.css';

class DatePicker extends Component {
    state = {
      startDate: null,
      endDate: null
    };
    alertStartDate = () => {alert(this.state.startDate)};
    alertEndDate = () => {alert(this.state.endDate)};
    render() {
      return (
      <div className='DatePicker'>
        <DateRangePicker
          startDate={this.state.startDate} 
          startDateId="your_unique_start_date_id" 
          endDate={this.state.endDate} 
          disabled={[new Date(2021, 4, 10), new Date(2021, 4, 15)]}
          endDateId="your_unique_end_date_id" 
          onDatesChange={({ startDate, endDate }) => this.setState({  startDate, endDate })} 
          focusedInput={this.state.focusedInput} 
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          isDayBlocked={this.isBlocked} 
        />
      <button onClick={this.alertStartDate}>Click me for start date</button>
      <button onClick={this.alertEndDate}>Click me for end date</button>
    </div>
    );
   }
  }
  export default DatePicker;