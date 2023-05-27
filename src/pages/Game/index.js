import "bootstrap/dist/css/bootstrap.min.css";
//import "../Game/style.scss";
import Card from "../../components/Card";
import Xp from "../../components/Xp";
import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';

export const Game = () => {
    const [card] = useState([

        {
            id: "1",
            variant:"click",
            front: "Gato",
            back: "Cat"
        },
        {
            id: "2",
            variant:"click",
            front: "Vaca",
            back: "Cow"
        },
        {
            id: "3",
            variant:"click",
            front: "Cachorro",
            back: "Dog"
        },
        {
            id: "4",
            variant:"click",
            front: "Cavalo",
            back: "Horse"
        },
        {
            id: "5",
            variant:"click",
            front: "Peixe",
            back: "Fish"
        },
        { id: "6",
            variant:"click",
            front: "Macaco",
            back: "Monkey"
        }
    
    ]);

    return (

           <div className="container">
           <div className="title">FlashCard Challenge</div>
           <Link to="/">Home</Link>
           <Xp total={100} />
           <div className="row h-100">
           <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {card.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}






















/*
        <>
         <div id="container-topo">
         <div className="titulo">FlashCard Challenge</div>
           <Xp total={100} />
         </div>
            <div id="container-cards">
                {cards.map((card) => 
                  <Card key={card.id} card={card} />
                  )};
            </div>
        </>
        
           
    )
}

*/