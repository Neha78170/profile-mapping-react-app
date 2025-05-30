import { Link } from "react-router-dom";

const ProfileCard = ({ profile, onSummaryClick }) => {
  if (!profile || !profile.photo) return null;

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

      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => onSummaryClick(profile)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          View Summary
        </button>

        <Link
          to={`/profile/${profile.id}`}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
