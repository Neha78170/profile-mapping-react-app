import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("profiles");
    if (data) {
      const parsed = JSON.parse(data);
      const found = parsed.find((p) => p.id === Number(id));
      if (found) {
        setProfile(found);
      }
    }
  }, [id]);

  if (!profile) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Profile not found.
      </p>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="bg-white p-6 shadow-md rounded text-center">
        <img
          src={profile.photo || "https://via.placeholder.com/150"}
          alt={profile.name}
          className="w-28 h-28 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="text-gray-600">{profile.description}</p>
        <p className="text-gray-500">{profile.address}</p>

        <div className="mt-4">
          <iframe
            title="Google Map"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${profile.location.lat},${profile.location.lng}&output=embed`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
