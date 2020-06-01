import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../css/datePicker.css';

class DatePic extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        className="datePicker"
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        dateFormat="Pp"
      />
    );
  }
}

export default DatePic;