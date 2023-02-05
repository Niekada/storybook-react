import styled from "styled-components";
import { searchBgColor } from "../../consts/colors";
import { AiOutlineSearch } from "react-icons/ai"

const SearchBar = () => {
  return (
    <InputWrapper>
      <AiOutlineSearch />
      <Input placeholder="Search"/>
    </InputWrapper>
  )
};

const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 12px;
    top: 10px;
  }
`

const Input = styled.input`
  background-color: ${searchBgColor};
  border: none; 
  outline: none;
  padding: 10px 40px;
`

export default SearchBar