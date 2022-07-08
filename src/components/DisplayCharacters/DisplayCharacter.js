import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import PropTypes from 'prop-types';
const DisplayCharacter = ({ results = [], info = {}, setPage, page }) => {
  
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  const displayResults = () => {
    const response = results.map((data, index) => {
      const { name, image,id } = data;
      const allowGrid = index === 0 || index / 4 === 0 ? true : false;
      return (
        <>
          <Grid item xs={4}key={index}>
          <Link to={`/${id}/details`} style={{ textDecoration: 'none',cursor:'pointer' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" image={image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
        </>
      );
    });
    return response;
  };
  const fetchData = (event, page) => {
    setPage(page);
  };
  return (
    <>
      <Grid
        container
        spacing={12}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {displayResults()}
      </Grid>
      <Box
        spacing={2}
        justifyContent={"right"}
        alignItems="right"
        display="flex"
        sx={{mt:'2%'}}
      >
        {info.count && (
          <Pagination
            count={Math.ceil(info.count / 20)}
            page={page}
            color="primary"
            onChange={fetchData}
          />
        )}
      </Box>
    </>
  );
};
DisplayCharacter.propTypes = {
  results: PropTypes.array,
  info: PropTypes.object,
  setPage: PropTypes.func,
  page: PropTypes.string
}
export default DisplayCharacter;
