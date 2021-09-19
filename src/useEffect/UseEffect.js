import React, {useEffect, useState} from 'react'

export default function UseEffect() {
    const colors = ["red", "green", "blue", "yellow"];
    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(() => {
        alert("Berubah Warna", [])
    });




    // const pressRedButton = () => {
    //     setColor("RED");
    // };

    // const pressBlueButton = () => {
    //     setColor("BLUE");
    // };

    return (
        <div
        style={{
          backgroundColor, height: "92.2vh", padding:50
        }}
      >
        <style>
          {`
          .circle {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            border: 1px solid black;
            display: inline-block;
            cursor: pointer;
          }
  #screen {
            width: 100vw;
            height: 100vh;
          }
        `}
        </style>
        {colors.map((c) => {
          return (
            <div
              key={c}
              style={{
                backgroundColor: c
              }}
              class="circle"
              onClick={() => setBackgroundColor(c)}
            ></div>
          );
        })}
      </div>
    )
}
