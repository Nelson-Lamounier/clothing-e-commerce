
import React, { FC, useState } from "react";
import {SearchContainer } from "./search-bar.style"

const SearchBar: FC =()=> {
  const [isActive, setIsActive] = useState<boolean>(false)

  const toggleSearch = () => {
    setIsActive((prev) =>!prev)
  }

  return (
    <SearchContainer isActive={isActive}>
      <button className="btn" onClick={toggleSearch}>
      🔍
      </button>
      <input
      type="text"
      className="input"
      placeholder="Search..."
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}>
      </input>
    </SearchContainer>
  )
}
export default SearchBar

