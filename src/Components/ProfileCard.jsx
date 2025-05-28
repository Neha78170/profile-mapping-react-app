import { Link } from "react-router-dom";
const ProfileCard = ({ profile, onSummaryClick }) => {
  if (!profile || !profile.photo) return null; // S

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mx-auto mb-4">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-24 h-24 rounded-full mx-auto mb-2"
      />
      <h2 className="text-xl font-semibold text-center">{profile.name}</h2>
      <p className="text-sm text-gray-500 text-center">{profile.address}</p>
            <p className="text-gray-600 text-center">{profile.description}</p>
      <div className="flex justify-center gap-2 mt-4">
      <button
        onClick={() => onSummaryClick(profile)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 block mx-auto"
      >
        <Link to = {`/profile/${profile.id}`}>
        <button className="bg-green-500 text-whtie px-3 py-1 rounded hover:bg-green-600">
          View Details
        </button>
        </Link>
         
      </button>
      </div>
    </div>
  );
};

export default ProfileCard;
