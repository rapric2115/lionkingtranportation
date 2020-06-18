import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        address: '',
        destination: ''
    };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 

  handleChangeDestination = destination => {
    this.setState({ destination });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  handleDestination = destination => {
      geocodeByAddress(destination)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.log('Error', error));
  };

 
  render() {
    return (
        <div>
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Origen ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
       <PlacesAutocomplete
       value={this.state.destination}
       onChange={this.handleChangeDestination}
       onSelect={this.handleDestination}
     >
       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
         <div>
           <input
             {...getInputProps({
               placeholder: 'Search Destination ...',
               className: 'location-search-input',
             })}
           />
           <div className="autocomplete-dropdown-container">
             {loading && <div>Loading...</div>}
             {suggestions.map(suggestion => {
               const className = suggestion.active
                 ? 'suggestion-item--active'
                 : 'suggestion-item';
               // inline style for demonstration purpose
               const style = suggestion.active
                 ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                 : { backgroundColor: '#ffffff', cursor: 'pointer' };
               return (
                 <div
                   {...getSuggestionItemProps(suggestion, {
                     className,
                     style,
                   })}
                 >
                   <span>{suggestion.description}</span>
                 </div>
               );
             })}
           </div>
         </div>
       )}
     </PlacesAutocomplete>
     </div>
     
    );
  }
}

export default LocationSearchInput;