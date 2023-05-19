  import React from 'react'
  import { useState } from 'react';
  import { flightsData } from './flightsData';
  import logo from "./images/logo.png"

  const FlightSearch = () => {
   
    //Set state of the options
      const [flights, setFlights] = useState([]);
      const [from, setFrom] = useState('');
      const [to, setTo] = useState('');
      const [sortOption, setSortOption] = useState('');
    

      //Changes made will set the given states
      const handleFromChange = (event) => {
        setFrom(event.target.value);
      };
     //Changes made will set the given states
      const handleToChange = (event) => {
        setTo(event.target.value);
      };
       //Changes made will set the given states
      const handleSortChange = (event) => {
        setSortOption(event.target.value);
      };
    
      //function call whenver user clicks search flight button
      const handleSearch = () => {
          //stores direct flights
          const directFlights = flightsData.filter(flight =>
            flight.start === from && flight.destination === to
          );
        
          //searches if flight has connecting flights
          const connectingFlights = flightsData.filter(flight =>
            flight.start === from && flight.connect && flight.connect.destination === to
          );
        

        console.log(connectingFlights)
          //combine both using spread operator
        const filteredFlights = [...directFlights, ...connectingFlights.map(flight => ({
          ...flight.connect,
          id: flight.id,
          price: flight.connect.price,
          time: flight.connect.time
        }))
      
      ];
        
        //Checks if user wants to sort the flight
        let sortedFlights;
        if (sortOption === 'Price') {
          sortedFlights = filteredFlights.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'Time') {
          sortedFlights = filteredFlights.sort((a, b) => a.time - b.time);
        } else {
          sortedFlights = filteredFlights;
        }
    
        setFlights(sortedFlights);
        };

        //Tailwind used for faster styling
          return (
              <div className='h-screen w-screen  px-36 pt-60 '>
                <div className="space-y-6">
                <h1 className='font-bold text-6xl '>Plan your Vacation <span className='text-red-600 font-bold text-6xl'>Today!</span></h1>
                <p className=''>Discover Amzing Places at an Amazing Price</p>
                </div>
                
              <div className="flex w-full">
              <div className="flex py-10 max-h-40 w-full justify-between">
                        <div className="flex flex-col items-center justify-center  bg-white rounded-md py-4 px-10 w-1/2 shadow-xl">
                        
                        <div className="flex space-x-10 items-center">

                        {/* From */}
                        <div className="flex flex-col">
                          <h1>From</h1>
                          <select id="from" name="from" value={from} onChange={handleFromChange} className='border border-b px-2 py-1 rounded-md'>
                            <option value="">Departure</option>
                            {/* New Set removes repeated items */}
                            {Array.from(new Set(flightsData.map(flight => flight.start))).map(start => (
                            <option key={start} value={start}>{start}</option>
                            ))}
                          </select>
                          </div>
                        {/* To */}
                        <div className="flex flex-col">
                          <h1>To</h1>
                          <select id="to" name="to" value={to} onChange={handleToChange} className='border border-b px-2 py-1 rounded-md'>
                            <option value="">Destination</option>
                            {/* New Set removes repeated items */}
                            {Array.from(new Set(flightsData.map(flight => flight.destination)))
                            .filter(destination => destination !== null && destination !== undefined)
                            .map(destination => (
                              <option key={destination} value={destination}>{destination}</option>
                            ))}
                          </select>
                        </div>
                        {/* Sort */}
                        <div className="flex flex-col">
                          <h1>Sort By</h1>
                          <select id="to" name="to" value={sortOption} onChange={handleSortChange} className='border border-b px-2 py-1 rounded-md'>
                            <option value="">None</option>
                            <option value="Price">Price </option>
                             <option value="Time">Time ()</option>
                          </select>
                        </div>

                        <button onClick={handleSearch} className='px-4 py-2 text-white bg-red-600 rounded-md font-bold'>Search</button>
                        </div>
                        
                      
                  </div>
                  <div className="flex justify-center  mb-32">                           
                          {flights.length > 0 ? (
                            <ul>
                              {flights.map(flight => (
                                <li key={flight.id}>
                                <div className="bg-white mb-2 rounded-md py-3 px-6  w-128 space-y-1 shadow-xl" >

                                <div className="flex items-center gap-2">
                                  <img src={logo} alt="" className='w-10 h-10'/>
                                  <h1>AirAsia</h1>
                                </div>

                                <div className="flex">
                                <h1 className='text-xl font-bold'>{flight.start} to {flight.destination}</h1>
                                </div>
                                <div className="flex gap-2">
                                  {/* Time */}
                                  <div className="border border-b rounded-md px-2 py-1">
                                        <h1 className='font-semibold'>Travel Time</h1>  
                                        <p>{Math.floor(flight.time/60)}Hrs {flight.time%60}Mins</p>
                                  </div>
                                  {/* Price */}
                                  <div className="border border-b rounded-md px-2 py-1">
                                      <h1 className='font-semibold'>Price per Seat</h1>
                                      <p>Php {flight.price}/Pax</p>
                                  </div>
                                </div>
                                </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <>
                            <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-airplane" viewBox="0 0 16 16">
                            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z"/>
                            </svg><p className='text-xl font-bold pr-56'>  No flights found</p>
                            </div>
                            </>
                          )}
                  </div>
              </div>
              
              </div>
              </div>
            );
          };

  export default FlightSearch
