import React, { useState } from "react";
import Geocode from "react-geocode";
import { Row, Col, Form, Input, Button, Alert } from "antd";

import Map from "./components/map";
import "antd/dist/antd.css";

//Geocode.setApiKey("AIzaSyA20nWiIGiOjUlnh_VsmcV6I9xERKti_us");
// Enable or disable logs. Its optional.
//Geocode.enableDebug();

const App = () => {
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  const [locations, setLocations] = useState([]);
  const handleSubmit = async e => {
    console.log("submitting");
    e.preventDefault();
    const currentLocations = locations;
    if (price === "" || price === 0 || address === "") {
      setMessage("Please, enter price and address");
      setVariant("error");
      return;
    }
    try {
      let geo_response = await Geocode.fromAddress(address);
      const { lat, lng } = geo_response.results[0].geometry.location;
      let latitude = lat;
      let longitude = lng;
      currentLocations.push({
        latitude,
        longitude,
        price
      });
      console.log("currentLocations", currentLocations);
      setLocations(currentLocations);
      setAddress("");
      setPrice("");
      setMessage("Location added successfully");
      setVariant("success");
    } catch (error) {
      console.log("error", error);
      setMessage("Unable to decode location");
      setVariant("error");
      return;
    }
  };
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h3 align="center">Update Map with React Geocode</h3>
      <Row gutter={16}>
        <Col span={16}>
          <div>Map comes here</div>
          {locations.length > 0 && <Map locations={locations} />}
        </Col>
        <Col span={8}>
          <div>Add new Price and Location</div>
          {message && variant && (
            <Alert message={message} type={variant} showIcon />
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Input
                type="text"
                placeholder="Enter Price"
                size="large"
                value={price}
                onChange={e => setPrice(e.target.value)}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                placeholder="Enter Address"
                size="large"
                required
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                Add Price and Location
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default App;
