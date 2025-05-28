import React, { useEffect, useState } from "react";
import ProfileCard from "../Components/ProfileCard";
import dummyProfiles from "../Data/Profiles.json";
import Loader from "../Components/Loader"

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProfiles = () => {
      setIsLoading(true);
      const local = localStorage.getItem("profiles");
      if (local && JSON.parse(local).length > 0) {
        setProfiles(JSON.parse(local));
      } else {
        setProfiles(dummyProfiles);
        localStorage.setItem("profiles", JSON.stringify(dummyProfiles));
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    loadProfiles();

    window.addEventListener("storage", loadProfiles);
    window.addEventListener("focus", loadProfiles);

    return () => {
      window.removeEventListener("storage", loadProfiles);
      window.removeEventListener("focus", loadProfiles);
    };
  }, []);

  const handleSummaryClick = (profile) => {
    console.log("Summary clicked for", profile.name);
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">User Profiles</h1>

      <input
        type="text"
        placeholder="Search by name or address"
        className="mb-4 w-full p-2 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isLoading ? (
        <Loader/>
      ) : filteredProfiles.length === 0 ? (
        <p className="text-center text-gray-400">No profiles found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onSummaryClick={handleSummaryClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
