import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    _id: id,
    name: "",
    trips: 0,
    airline: 0
  });

  useEffect(() => {
    axios.get("https://api.instantwebtools.net/v1/passenger/" + id)
      .then(res => {
        console.log("My Edit Result:", res.data);
        console.log("My Airline:", res.data.airline[0].id);
        setValues(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitteddddddd");
    axios.put("https://api.instantwebtools.net/v1/passenger/" + id, {
      name: values.name,
      trips: values.trips,
      airline: values.airline[0].id
    })
      .then(res => {
        console.log("My Updated Result:", res.data);
        navigate("/");
      })
      .catch(err => console.log(err))
    console.log("valuessssssss airlineeeee:", values.airline[0].id);
  };

  return (
    <>
      <Box sx={{ padding: 2, width: 550, textAlign: "center" }}>
        <Typography variant="h6" component="div" fontSize="20px">Editing Record of id : {id}</Typography>
        <br />
        <form onSubmit={submitHandler}>
          <Grid container spacing={2} sx={{ px: 2, mb: 2 }}>
            <Grid item={true} xs={12} md={12} lg={12}>
              <Box sx={{ mb: 1 }}>
                <TextField name="name" label="Name" fullWidth value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} />
                {/* value={localStorage.getItem("Name")} */}
                {/* value={values.name} */}
                {/* onChange={(event) => setValues({ ...values, name: event.target.value })} */}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ px: 2, mb: 2 }}>
            <Grid item={true} xs={12} md={12} lg={12}>
              <Box sx={{ mb: 1 }}>
                <TextField name="trips" label="Trips" fullWidth value={values.trips} onChange={(event) => setValues({ ...values, trips: parseInt(event.target.value) })} />
                {/* value={localStorage.getItem("Trips")} */}
                {/* value={values.trips} */}
                {/* onChange={(event) => setValues({ ...values, trips: event.target.value })} */}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ px: 2, mt: 5, mb: 3, textAlign: "left" }}>
            <Button variant="contained" label="Save Changes" size="small" type="submit">Update</Button>
            <Link to="/">
              <Button variant="outlined" label="Cancel" size="small" sx={{ ml: 2, px: 3 }}>Cancel</Button>
            </Link>
          </Box>
        </form>
      </Box></>
  )
}

export default Edit


// const [editValues, setEditValues] = useState(
//   {
//     _id: "644fa0a43876101c8920bff7",
//     name: "Summer Glau",
//     trips: 350,
//     airline: [
//       {
//         _id: "6454b2c93ba3b644805412b3",
//         id: 10,
//         name: "Sri Lankan Airways 667",
//         country: "Sri Lanka",
//         logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
//         slogan: "From Sri Lanka",
//         head_quaters: "Katunayake, Sri Lanka",
//         website: "www.srilankaairways.com",
//         established: "1990",
//         __v: 0
//       }],
//     __v: 0
//   }
// );


 // const [editValues, setEditValues] = useState(
  //   {
  //     _id: id,
  //     name: "",
  //     trips: 0,
  //     airline: [
  //       {
  //         _id: "",
  //         id: 0,
  //         name: "",
  //         country: "",
  //         logo: "",
  //         slogan: "",
  //         head_quaters: "",
  //         website: "",
  //         established: "",
  //         __v: 0
  //       }],
  //     __v: 0
  //   }
  // );

  //API: https://api.instantwebtools.net/v1/passenger/:id
