import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../Components/ProfileForm";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
    location: { lat: "", lng: "" },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("profiles");
    if (stored) {
      setProfiles(JSON.parse(stored));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "lat" || name === "lng") {
      setNewProfile((prev) => ({
        ...prev,
        location: { ...prev.location, [name]: value },
      }));
    } else {
      setNewProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const updateLocal = (updated) => {
    setProfiles(updated);
    localStorage.setItem("profiles", JSON.stringify(updated));
  };

  const handleAdd = () => {
    const id = Date.now();
    const profileToAdd = { ...newProfile, id };
    const updated = [...profiles, profileToAdd];
    updateLocal(updated);
    resetForm();
    navigate("/"); // Navigate to Home
  };

  const handleEditClick = (profile) => {
    setNewProfile(profile);
    setEditMode(true);
    setEditId(profile.id);
  };

  const handleUpdate = () => {
    const updated = profiles.map((p) =>
      p.id === editId ? { ...newProfile, id: editId } : p
    );
    updateLocal(updated);
    resetForm();
  };

  const handleDelete = (id) => {
    const updated = profiles.filter((p) => p.id !== id);
    updateLocal(updated);
  };

  const resetForm = () => {
    setNewProfile({
      name: "",
      photo: "",
      description: "",
      address: "",
      location: { lat: "", lng: "" },
    });
    setEditMode(false);
    setEditId(null);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Admin Panel</h2>

      <ProfileForm
        profile={newProfile}
        onChange={handleChange}
        onSubmit={editMode ? handleUpdate : handleAdd}
        editMode={editMode}
      />

      <h3 className="text-lg font-semibold mb-2">All Profiles</h3>
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="border rounded p-2 mb-2 flex justify-between items-center"
        >
          <div className="flex items-center space-x-3">
            <img
              src={profile.photo || "https://via.placeholder.com/50"}
              alt={profile.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{profile.name}</p>
              <p className="text-sm text-gray-500">{profile.description}</p>
              <p className="text-sm text-gray-400">{profile.address}</p>
            </div>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => handleEditClick(profile)}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(profile.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
