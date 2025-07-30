import { useRef, useState, useEffect } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

  /** Here is the use case that initially we have to load the data
   * so we need to execute it only once that is why we have put outside the App component */ 
  const selectedPlaceList = ()=>{
    const selectedPlaces = JSON.parse(localStorage.getItem('selectedPlaces')) || []
    const places = []
    for(const  id of selectedPlaces){
       const place = AVAILABLE_PLACES.find((place) => place.id === id);
       if(place) places.push(place)
    }
    return places
  }

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(selectedPlaceList);
   const [availablePlaces, setAvailablePlace] = useState([]);
   const [isModelOpen, setIsModelOpen] = useState(false);

  function handleStartRemovePlace(id) {
       setIsModelOpen(true)
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
      setIsModelOpen(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);

      /** Here we will going to use localstorage feature of browser to store data in the form of string only
       * The data only be stored in the form of string in it.
       */
      const selectedPlaces = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
      if (!selectedPlaces.includes(id))
        localStorage.setItem(
          "selectedPlaces",
          JSON.stringify([id, ...selectedPlaces])
        );
      return [place, ...prevPickedPlaces];
    });
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => {
        if(place.id !== selectedPlace.current) return true
        else{
          /** Here removing elements from the local storage also works the same ways */
          const selectedPlaces =  JSON.parse(localStorage.getItem('selectedPlaces')) || []
          const updatedPlaces = selectedPlaces.filter(placeId => placeId !== selectedPlace.current)
          localStorage.setItem('selectedPlaces',JSON.stringify(updatedPlaces))
          return false
        }
      })
    );
    setIsModelOpen(false)
  }

  /** Here this hook will executes when the components loads fully and then it
   *  set/update the state so that the code not get into the infinite loop */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setAvailablePlace(
        sortPlacesByDistance(
          AVAILABLE_PLACES,
          position.coords.latitude,
          position.coords.longitude
        )
      );
    });
  }, []);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setAvailablePlace(
        sortPlacesByDistance(
          AVAILABLE_PLACES,
          position.coords.latitude,
          position.coords.longitude
        )
      );
    });
  }, []);

  return (
    <>
      <Modal open={isModelOpen} ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText="Please wait for sometime to load the places."
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
