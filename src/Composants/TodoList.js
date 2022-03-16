import React, { useState } from 'react';
import Card from './Card';
export default function TodoList() {
  const [titre, setTitre] = useState(''); // input titre
  const [content, setContent] = useState(''); // input content
  const [data, setData] = useState([]); // les cards list
  const [show, setShow] = useState(false); // aficher une contenu si true
  const id = 1; // card id
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((previous) => [
      { id: id, titre: titre, content: content },
      ...previous,
    ]);
    if (titre === '' || content === '')
      throw new Error('veuillez remplir vos champs avant de continuer '); // si les champs inputs sont vides cava generer une error

    setShow(true); // on passe le Show state a true pour afficher les cards
  };

  const handleDelete = () => {
    // supprimer un element du state by ID
    setData((item) => item.filter((_, item) => item !== id - 1));
    data === '' ? setShow(false) : null;
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <input
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          type="text"
          placeholder="titre"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="content"
        />
        <br />
        <input type="submit" value="c'est parti" />
      </form>

      {
        show ? ( // // si le state show est passer a TRUE alors on affiche ce contenu
          <main>
            {data.map((card, index) => (
              <Card
                title={card.titre}
                content={card.content}
                key={index}
                Delete={handleDelete}
              />
            ))}
          </main>
        ) : null //si le state show est false alors on affiche rien
      }
    </div>
  );
}
