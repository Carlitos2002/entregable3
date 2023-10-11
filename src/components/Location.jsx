import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  return (
    
    <section>
      <header>
        <img className="flex mx-auto" src="\public\Frame.png" alt="" />
      </header>
      <form onSubmit={handleSubmit} className="flex border-green-400 border-2 w-72 mx-auto mb-24 items-center">
        <input
          placeholder="Type a location Id ..."
          name="idLocation"
          className="text-slate-500 bg-transparent border-none"
          type="number"
        />
        <button type="submit" className="flex gap-2 text-fuchsia-100 border-solid bg-green-400/50 text-xl items-center p-2 hover:bg-green-200 hover:text-black transition duration-1000">
          Search <IconSearch/>
        </button>
      </form>

      {/* Location info */}
      <section className="border-solid border-green-400 border-2 text-center mx-auto max-w-xl">
        <h3 className="text-green-400">Welcome to {location?.name}</h3>

        <ul className="">
          <li>Type: {location?.type}</li>
          <li>Dimension: {location?.dimension}</li>
          <li>Population: {location?.residents.length}</li>
        </ul>
      </section>
    </section>
  );
};

export default Location;
