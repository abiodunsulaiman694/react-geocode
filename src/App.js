import React, { useState } from "react";
import Geocode from "react-geocode";
import { Row, Col, Form, Input, Button } from "antd";

Geocode.setApiKey("AIzaSyBDg0C57bbmG0bLN-OtloCzy2PxUDguTFM");
// Enable or disable logs. Its optional.
Geocode.enableDebug();

function App() {
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  const [locations, setLocations] = useState([]);
  const handleSubmit = async e => {
    e.preventDefault;
    const currentLocations = locations;
    if (price === "" || price === 0 || address === "") {
      setMessage("Please, enter price and address");
      setVariant("error");
      return;
    }
    try {
      let geo_response = await Geocode.fromAddress(address);
      const { lat, lng } = geo_response.results[0].geometry.location;
      latitude = lat;
      longitude = lng;
      currentLocations.push({
        latitude,
        longitude,
        price
      });
      setLocations(currentLocations);
      setAddress("");
      setPrice("");
      setMessage("Location added successfully");
      setVariant("success");
    } catch (error) {
      setMessage("Unable to decode location");
      setVariant("error");
      console.error("error", error);
      return;
    }
  };
  return (
    <>
      <h3 align="center">Update Map with React Geocode</h3>
      <Row gutter={16}>
        <Col span={16}>
          <div>Map comes here</div>
          <Map locations={locations} />
        </Col>
        <Col span={8}>
          <div>Add new Price and Location</div>
          {message && variant && (
            <Alert message={message} type={variant} showIcon />
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Input.Number
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
                addonBefore="&#8358;"
                type="text"
                placeholder="Enter Address"
                size="large"
                required
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button className="primary-button" size="large">
                Add Price and Location
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default App;
