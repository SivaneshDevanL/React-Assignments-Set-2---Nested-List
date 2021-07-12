import React, { useState } from 'react';
import Town from './towns';

const states = [
    {
      name: "Madhya Pradesh",
      cities: [
        {
          name: "Indore",
          towns: [
            {
              name: "Mhow",
            },
            {
              name: "Dewas",
            },
          ],
        },
        {
          name: "Bhopal",
          towns: [
            {
              name: "Manit",
            },
            {
              name: "Berasia",
            },
          ],
        },
        {
          name: "Gwalior",
          towns: [
            {
              name: "Ajaypur",
            },
          ],
        },
      ],
    },
    {
      name: "Jharkhand",
      cities: [
        {
          name: "Dhanbad",
          towns: [
            {
              name: "IIT(ISM) Dhanbad",
            },
            {
              name: "Hirapur",
            },
          ],
        },
        {
          name: "Wasseypur",
          towns: [
            {
              name: "Sardar khan's",
            },
            {
              name: "Faizal khan's",
            },
          ],
        },
        {
          name: "Mirzapur",
          towns: [
            {
              name: "Kaleen bhaiya's",
            },
            {
              name: "Guddu bhaiya's",
            },
          ],
        },
      ],
    },
    {
      name: "Assam",
      cities: [
        {
          name: "Guwhati",
          towns: [
            {
              name: "Amin",
            },
            {
              name: "Jalah",
            },
          ],
        },
        {
          name: "Jungle1",
          towns: [
            {
              name: "Tiger found at IIT Guwahati",
            },
            {
              name: "Leopard found in IIT Guwahati",
            },
          ],
        },
        {
          name: "Tezpur",
          towns: [
            {
              name: "Dibrugarh",
            },
            {
              name: "Silchar",
            },
          ],
        },
      ],
    },
    {
      name: "Bihar",
      cities: [
        {
          name: "Patna",
          towns: [
            {
              name: "Sonpur",
            },
            {
              name: "Maner",
            },
          ],
        },
        {
          name: "Gaya",
          towns: [
            {
              name: "Bakraur",
            },
            {
              name: "Barachatti",
            },
          ],
        },
        {
          name: "Darbhanga",
          towns: [
            {
              name: "Singhwara",
            },
            {
              name: "Jale",
            },
          ],
        },
      ],
    },
  ];

export default function City({id}){
    const [city1,setCity1]=useState()
    const [city2,setCity2]=useState()
    const [city3,setCity3]=useState()
    return(
        <>
        {typeof id==='number'&&
            <>
            <p id='city1' onClick={()=>city1===0?setCity1():setCity1(0)}>{states[id].cities[0].name}</p>
            <Town id={id} id1={city1}/>
            <p id='city2' onClick={()=>city2?setCity2():setCity2(1)}>{states[id].cities[1].name}</p>
            <Town id={id} id1={city2}/>
            <p id='city3' onClick={()=>city3?setCity3():setCity3(2)}>{states[id].cities[2].name}</p>
            <Town id={id} id1={city3}/>
            </>
        }
        </>
    )
}
