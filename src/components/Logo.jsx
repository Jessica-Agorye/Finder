import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <>
      <div className="text-4xl ml-10 mt-6 flex gap-1">
        <FontAwesomeIcon className="mt-1" icon={faMagnifyingGlassLocation} />
        <p>Fynderr</p>
      </div>
    </>
  );
};

export default Logo;
