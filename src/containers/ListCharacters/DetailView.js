import React, { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../../components/Header/Header";
import {
  fetchSingleCharacter,
  rmCharactersSelector,
} from "../../redux/modules/slices/rmCharacters.slice";
import "./DetailView.scss";
import { useDispatch, useSelector } from "react-redux";
import DisplaySingleCharacter from "../../components/DisplayCharacters/DisplaySingleCharacter";
const DetailView = () => {
  const url = window.location.href.split("/");
  const id = url[3];
  const dispatch = useDispatch();
  const selectedCharacter = useSelector(rmCharactersSelector);
  console.log(selectedCharacter);
  useEffect(() => {
    dispatch(fetchSingleCharacter(id));
  }, [id]);

  return (
    <div className="detail-container">
      <Header />
      <h3 className="detail-head"> Detail Character View</h3>
      {!selectedCharacter.isFetching ? ( <DisplaySingleCharacter selectedCharacter={selectedCharacter}/>):(
        <Box justifyContent={"center"}  alignItems="center" display="flex">
        <CircularProgress />
      </Box>
      )}
    </div>
  );
};

export default DetailView;
