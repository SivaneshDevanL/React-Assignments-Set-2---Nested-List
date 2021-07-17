import React from 'react';

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

export default function App() {

    function check(i) {
   
    const cn=document.getElementById(`state${i+1}`).className
   
    const ele=document.getElementsByClassName(cn)
   
    if(ele[1].innerText===''){
   
    const{cities}=states[i]
   
    for(let i=1;i<ele.length;i++){
   
    ele[i].innerText=cities[i-1].name
   
    }
   
    }
   
    else{
   
    for(let i=1;i<ele.length;i++){
   
    ele[i].innerText=''
   
    const t=ele[i].className.split(' ')
   
    const tn=document.getElementsByClassName(t[1])
   
    for(let j=1;j<tn.length;j++) tn[j].innerText=''
   
    }
   
    
   
   }
   
    }
   
    function checkcity(s,j,c) {
   
    const ele=document.getElementsByClassName(`town${c}`)
   
    if(ele[1].innerText===''){
   
    const{towns}=states[s].cities[j]
   
    for(let i=1;i<ele.length;i++){
   
    ele[i].innerText=towns[i-1].name
   
    }
   
    }
   
    else{
   
    for(let i=1;i<ele.length;i++){
   
    ele[i].innerText=''
   
    }
   
    }
   
    }
   
    return (
   
    <div id="main" style={{ cursor: 'pointer' }}>
   
    <h3 id="state1" className="statecity1" onClick={() => check(0)}>{states[0].name}</h3>
   
    <h4 id="city1" className="statecity1 town1" onClick={()=>checkcity(0,0,1)} ></h4>
   
    <h5 id="town1" className="town1"></h5>
   
    <h5 id="town2" className="town1"></h5>
   
    <h4 id="city2" className="statecity1 town2" onClick={()=>checkcity(0,1,2)}></h4>
   
    <h5 id="town1" className="town2"></h5>
   
    <h5 id="town2" className="town2"></h5>
   
    <h4 id="city3" className="statecity1 town3" onClick={()=>checkcity(0,2,3)}></h4>
   
    <h5 id="town1" className="town3"></h5>
   
    <h3 id="state2" className="statecity2" onClick={() => check(1)}>{states[1].name}</h3>
   
    <h4 id="city1" className="statecity2 town4" onClick={()=>checkcity(1,0,4)} ></h4>
   
    <h5 id="town1" className="town4"></h5>
   
    <h5 id="town2" className="town4"></h5>
   
    <h4 id="city2" className="statecity2 town5"onClick={()=>checkcity(1,1,5)}></h4>
   
    <h5 id="town1" className="town5"></h5>
   
    <h5 id="town2" className="town5"></h5>
   
    <h4 id="city3" className="statecity2 town6"onClick={()=>checkcity(1,2,6)}></h4>
   
    <h5 id="town1" className="town6"></h5>
   
    <h5 id="town2" className="town6"></h5>
   
    <h3 id="state3" className="statecity3" onClick={() => check(2)}>{states[2].name}</h3>
   
    <h4 id="city1" className="statecity3 town7" onClick={()=>checkcity(2,0,7)} ></h4>
   
    <h5 id="town1" className="town7"></h5>
   
    <h5 id="town2" className="town7"></h5>
   
    <h4 id="city2" className="statecity3 town8" onClick={()=>checkcity(2,1,8)}></h4>
   
    <h5 id="town1" className="town8"></h5>
   
    <h5 id="town2" className="town8"></h5>
   
    <h4 id="city3" className="statecity3 town9" onClick={()=>checkcity(2,2,9)}></h4>
   
    <h5 id="town1" className="town9"></h5>
   
    <h5 id="town2" className="town9"></h5>
   
    <h3 id="state4" className="statecity4" onClick={() => check(3)}>{states[3].name}</h3>
   
    <h4 id="city1" className="statecity4 town10" onClick={()=>checkcity(3,0,10)} ></h4>
   
    <h5 id="town1" className="town10"></h5>
   
    <h5 id="town2" className="town10"></h5>
   
    <h4 id="city2" className="statecity4 town11" onClick={()=>checkcity(3,1,11)}></h4>
   
    <h5 id="town1" className="town11"></h5>
   
    <h5 id="town2" className="town11"></h5>
   
    <h4 id="city3" className="statecity4 town12" onClick={()=>checkcity(3,2,12)}></h4>
   
    <h5 id="town1" className="town12"></h5>
   
    <h5 id="town2" className="town12"></h5>
   
    </div>
   
    )
   
   }
