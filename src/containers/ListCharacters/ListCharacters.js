import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import DisplayCharacter from "../../components/DisplayCharacters/DisplayCharacter";
import { CircularProgress } from "@mui/material";
import {
  fetchCharacters,
  rmCharactersSelector,
} from "../../redux/modules/slices/rmCharacters.slice";

const ListCharacters = ({}) => {
  const dispatch = useDispatch();
  const [page,setPage] = useState(1);
  const rmCharacters = useSelector(rmCharactersSelector);
  const {
    data:{ data: { characters = {} } = {}}={},
  } = rmCharacters;
 

  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [page]);
  const { results, info } = characters;
  console.log(results);

  return (
    <>
      {!rmCharacters.isFetching ? (
       <Box sx={{ mt: "5%",ml:"2%" }}>
          <DisplayCharacter results={results} info={info} setPage={setPage} page={page}/>
          </Box>
        
      ): (<Box sx={{ mt: "12%" }} justifyContent={"center"}  alignItems="center" display="flex">
      <CircularProgress />
    </Box>)}
    </>
  );
};
export default ListCharacters;
