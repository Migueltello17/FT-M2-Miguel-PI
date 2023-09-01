import Card from './Card';

export default function Cards({characters, onClose}) {

   return (
          <div>
          {
          characters.map((character) => {
               return(
                  <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onClose}/>
                   )
      })}
          </div>
)
}

// export default function Cards({ characters, onClose }) {
//    return (
//    <div>
//       {
//          characters.map (({id,name,status,species,gender,
//             origin,image}) => {
//             return (
//                <Card
//                key = {id}
//                id = {id}
//                name = {name}
//                status = {status}
//                species = {species}
//                gender = {gender}
//                origin = {origin.name}
//                image = {image}
//                onClose={onClose} 
//                />
//             )
//          })
//       }
//    </div>
//    )
// }
