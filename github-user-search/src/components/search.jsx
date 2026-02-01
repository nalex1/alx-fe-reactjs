import { useState } from "react";
import githubApi from "../services/githubApi";

function Search() {
  const [username, setUsername] = useState("");

  const handleSearch = async () => {
    if (!username) return;

    try {
      const response = await githubApi.get(`/users/${username}`);
      console.log(response.data);
      alert(`User found: ${response.data.login}`);
    } catch (error) {
      alert("User not found");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;