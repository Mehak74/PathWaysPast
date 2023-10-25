import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar";
import s from "../assests/s.jpg";
import Footer from "../components/Footer/Footer";
import Trip from "../components/Trip/Trip";
// import SearchBar from "../components/SearchBar/Searchbar";
// import TripData from "../components/Trip/TripData";
// import { useState } from "react";
// import EmptyList from "../components/EmptyList/EmptyList";
// import { Data } from "../components/Trip/Data";
function Service(){

  //   const [blogs, setBlogs] = useState(Trip);
  // const [searchKey, setSearchKey] = useState('');
  // // Search submit
  // const handleSearchBar = (e) => {
  //   e.preventDefault();
  //   handleSearchResults();
  // };

  // // Search for blog by category
  // const handleSearchResults = () => {
  //   const allBlogs = Data;
  //   const filteredBlogs = allBlogs.filter((blog) =>
  //     blog.heading.toLowerCase().includes(searchKey.toLowerCase().trim())
  //   );
  //   setBlogs(filteredBlogs);
  // };

  // // Clear search and show all blogs
  // const handleClearSearch = () => {
  //   setBlogs(Trip);
  //   setSearchKey('');
  // };
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={s}
        title="Service"
        btnClass="hide"
        />
         {/* <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList/> : <TripData blogs={blogs} />} */}
        <Trip/>
        <Footer/>
        </>
    )
}


export default Service;