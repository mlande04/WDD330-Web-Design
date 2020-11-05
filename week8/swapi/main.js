const peopleUrl= 'https://swapi.dev/api/people/';
const shipsUrl= 'https://swapi.dev/api/starships/';

const peopleButton=document.getElementById('people');

peopleButton.addEventListener('click', toCallPeople);

function toCallPeople(){
const people = fetch(peopleUrl)
.then(response =>{
  if (response.ok){
    return response;
  }
  throw Error(response.statusText);
})
.then(response =>response.json())
.then(function(data){
  let names = data.results;
  const content = document.getElementById('output1');
  //for(let i =
    content.innerHTML=
  `<ul>
    <li>
    Name: ${names[i].name}
    </li>
  
  </ul>`
})
.catch(error=>console.log('There was an error'))
}



const shipsButton=document.getElementById('ships');

shipsButton.addEventListener('click', getShips);

function getShips(){
const people = fetch(shipsUrl)
.then(response =>{
  if (response.ok){
    return response;
  }
  throw Error(response.statusText);
})
.then(response =>response.json())
.then(function(data){
  let ship = data.results;
  const content = document.getElementById('output1');
    content.innerHTML=
  `<ul>
    <li>
    Starship: ${ship[i].starships}
    </li>
  
  </ul>`
})
.catch(error=>console.log('There was an error'))
}
