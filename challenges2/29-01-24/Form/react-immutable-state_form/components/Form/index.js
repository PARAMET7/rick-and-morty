import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    console.log("event=>",event);
    console.log("event-v=>",event.target.value);
    updateMountain((draft) => {
      draft.name=event.target.value
    });
  }

  function handleAltitudeChange(event) {
    console.log("event-v1=>",event);
    console.log("event-v2=>",event.target.value);
    updateMountain((draft) => {
      draft.values.altitude= event.target.value
    });

  }

  function handleMountainRangeChange(event) {
    updateMountain((draft) => {
      console.log("event-v3=>",event.target.value);
      draft.values.mountainRange= event.target.value
      console.log("event-v4=>",draft.values.mountainRange);
    });

  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
