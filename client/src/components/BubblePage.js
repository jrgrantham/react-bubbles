import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../authentication/axios";

const colorsApi = 'http://localhost:5000/api/colors';


const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect (() => {
    axiosWithAuth()
      .get(colorsApi)
      .then(response => {
        console.log(response)
        setColorList(response.data)
      })
      .catch(error => alert(error)
      )
  }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
