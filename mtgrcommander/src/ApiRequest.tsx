import React, { useState } from 'react';
 export default function ApiRequest(){
    const [cards, setCards] = useState([]);

    const makeAPIcall = async () => {
        const url = 'https://api.scryfall.com/cards/search?q=cmc:12';
        const response = await fetch(url);
        const body = await response.json();
        const items = body['data'];
        setCards(items);
    }

    return (
        <div>
            <h1>API Request</h1>
            <button onClick={makeAPIcall}>Request API Scryfall</button>
            {cards.map((card) => (
                    <div key={card['id']}>
                        <p>{card['id']}</p>
                        <img src={card['image_uris']['small']} alt={card['name']} />
                        <p>{card['name']}</p>
                        <p>{card['mana_cost']}</p>
                        <p>{card['type_line']}</p>
                    </div>
                ))}
        </div>
        
    )

}
