import "../../../../App.css";
import "./osmComponent.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../../Sidebar/sideBarComponent";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dashboardBoxStyle from "../../Sidebar/sideBarComponent.js";
import Box from "@mui/material/Box";
import { AuthContext } from "../../../service/Authentication/authContext";
import axios from "axios";

const position = [42.6977, 23.3219];
const defaultDistance = 6000; //in meters

const api = axios.create({
  baseURL: process.env.REACT_APP_APIGW_URL,
});

function OSMComponent() {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState({});
  const [sportType, setSportType] = useState("");

  const handleChange = (event) => {
    setSportType(event.target.value);
    console.log(localStorage.getItem("AD-IdToken"));
    api
      .get(
        "/pitch/locate?latitude=" +
          position[0] +
          "&longitude=" +
          position[1] +
          "&radius=" +
          defaultDistance +
          "&type=" +
          event.target.value,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("AD-IdToken"),
          },
        }
      )
      .catch(function (error) {
        console.log(error.toJSON());
      })
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          map.leafletElement.addLayer(
            L.marker(
              [
                response.data[i].location.coordinates[0],
                response.data[i].location.coordinates[1],
              ],
              {
                color: "red",
                fillColor: "red",
                fillOpacity: 0.5,
                radius: 1,
              }
            )
          );
        }
      });
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
              value={sportType}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"FOOTBALL"}>Football</MenuItem>
              <MenuItem value={"TENNIS"}>Tennis</MenuItem>
              <MenuItem value={"BASKETBALL"}>Basketball</MenuItem>
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

OSMComponent.contextType = AuthContext;
export default OSMComponent;
