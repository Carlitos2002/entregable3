import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constans/resident";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border-solid border-green-400 border-2">
      <header className="relative">
        <img src={resident?.image} alt="" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-5 py-2 rounded-md flex items-center gap-2 w border-solid border-green-400 border-2">
          <div
            className={`h-3 w-3 ${
              characterStatus[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div>
        <hr className="border-solid border-green-400 border-2"/>
        <h4 className="text-xl  text-center pb-2">{resident?.name}</h4>
        <ul className="text-center bg-transparent">
          <li>
            <span className="text-base">Species:</span> {resident?.species}
          </li>
          <li>
            <span className="text-base">Origin:</span> {resident?.origin.name}
          </li>
          <li>
            <span className="text-base">Times appear:</span> {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ResidentCard;
