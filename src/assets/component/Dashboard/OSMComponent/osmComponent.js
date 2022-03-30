import "../../../../App.css";
import "./osmComponent.css";
import React, { Component, useState, useEffect } from "react";
import Sidebar from "../../Sidebar/sideBarComponent";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dashboardBoxStyle from "../../Sidebar/sideBarComponent.js";
import Box from "@mui/material/Box";

const position = [42.6977, 23.3219];

function OSMComponent() {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState({});
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    if (!map) return;

    map.addEventListener("mousemove", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
  }, [map]);

  const { lat, lng } = coords;

  const content = (
    <React.Fragment>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <Box
        sx={{
          ...dashboardBoxStyle,
          borderRadius: "16px",
          flexDirection: "row",
        }}
      >
        {lat && (
          <div>
            <b>Lat</b>: {lat?.toFixed(4)} <br />
            <b>Lon</b>: {lng?.toFixed(4)}
          </div>
        )}
        <div>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Sport</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"soccer"}>Football</MenuItem>
              <MenuItem value={"tennis"}>Tennis</MenuItem>
              <MenuItem value={"basketball"}>Basketball</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
    </React.Fragment>
  );

  return (
    <div>
      <Sidebar content={content} />
    </div>
  );
}

export default OSMComponent;
