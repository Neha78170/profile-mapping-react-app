const ProfileForm = ({ profile, onChange, onSubmit, editMode }) => {
  return (
    <div className="grid gap-2 mb-4">
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={onChange}
        placeholder="Name"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="photo"
        value={profile.photo}
        onChange={onChange}
        placeholder="Photo URL"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="description"
        value={profile.description}
        onChange={onChange}
        placeholder="Description"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="address"
        value={profile.address}
        onChange={onChange}
        placeholder="Address"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="lat"
        value={profile.location?.lat || ""}
        onChange={onChange}
        placeholder="Latitude"
        className="border p-2 rounded"
      />
      <input
        type="text"
        name="lng"
        value={profile.location?.lng || ""}
        onChange={onChange}
        placeholder="Longitude"
        className="border p-2 rounded"
      />
      <button
        onClick={onSubmit}
        className={`${
          editMode ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
        } text-white px-4 py-2 rounded`}
      >
        {editMode ? "Update Profile" : "Add Profile"}
      </button>
    </div>
  );
};
export default ProfileForm;