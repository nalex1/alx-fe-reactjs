import profileImg from "../assets/kkkk.jpg";
function UserProfile() {
  return (
    <div className="user-profile hover:shadow-xlbg-gray-100 sm:p-4 md:p-8 md:max-w-sm sm:max-w-xs mx-auto my-20 rounded-lg shadow-lg ">
      <img src={profileImg} alt="User" className="hover:scale-110 transition-transform duration-300 ease-in-out rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36" />
      <h1 className="hover:text-blue-500 md:text-xl text-blue-800 my-4 sm:text-lg md:text-base">John Doe</h1>
      <p className="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;