import { Link } from "react-router-dom";

const PetCard = ({ item }) => {
  const { photoURL, name, age, _id } = item;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
      <img src={photoURL} alt="Mountain" className="w-full h-64 object-cover" />
      <div className="p-6">
        <small className="text-gray-600 font-semibold">
          Pet Age: {age} years
        </small>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Avatar"
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-gray-800 font-semibold">John Doe</span>
          </div>
          <Link to={`/details/${_id}`}>
            <span className="text-gray-600 cursor-pointer">Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
