export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
