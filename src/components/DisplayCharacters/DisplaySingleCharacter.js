import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import classNames from "classnames";
import PropTypes from 'prop-types';
const DisplaySingleCharacter = ({selectedCharacter}) =>{
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    const {
        list: {
          data: {
            character: {
              name = "",
              image = "",
              gender = "",
              status = "",
              location: { created = "" } = {},
            } = {},
          } = {},
        } = {},
      } = selectedCharacter;
      const createdDate = created ? new Date(created).toDateString() : "";
    return (
        <Grid container spacing={12}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={image} />
          </Card>
        </Grid>
        <Grid item xs={2} md={4}>
          <div className="container-div" xs={12} md={12}>
            <div className="label-div">
              <b> Name </b>
            </div>
            <div xs={5} md={5}>
              {name}
            </div>
          </div>
          <div className="container-div" xs={12} md={12}>
            <div className="label-div" md={6}>
              <b>Gender </b>
            </div>
            <div xs={5} md={5}>
              {gender}
            </div>
          </div>
          <div className="container-div" xs={12} md={12}>
            <div className="label-div" md={6}>
              <b> Status </b>
            </div>
            <div xs={5} md={5}>
              <span
                className={classNames("status", {
                  ["alive"]: status === "Alive",
                  ["dead"]: status !== "Alive",
                })}
              />{" "}
              {status}
            </div>
          </div>
          <div className="container-div" xs={12} md={12}>
            <div className="label-div" md={6}>
              <b> Created </b>
            </div>
            <div xs={5} md={5}>
              {createdDate}
            </div>
          </div>
        </Grid>
      </Grid>
    )
};
DisplaySingleCharacter.propTypes = {
    selectedCharacter: PropTypes.object,
  }
export default DisplaySingleCharacter;