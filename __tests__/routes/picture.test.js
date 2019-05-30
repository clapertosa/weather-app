import request from "supertest";
import server from "../../server/index";
import axios from "axios";

describe("POST /api/picture", () => {
  it("returns a picture based on latitude and longitude", async () => {
    // Mock axios
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { photos: { photo: [{ width_l: 10000, height_l: 1000 }] } }
      })
    );

    const res = await request(server)
      .post("/api/picture")
      .expect(200);

    expect(res.text).toEqual(
      '"https://farmundefined.staticflickr.com/undefined/undefined_undefined_b.jpg"'
    );
  });

  it("returns a fallback picture if width_l < height_l or no pictures were find", async () => {
    // width_l < height_l
    // Mock axios
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { photos: { photo: [{ width_l: 100, height_l: 10000 }] } }
      })
    );

    let res = await request(server)
      .post("/api/picture")
      .expect(200);

    expect(res.text).toEqual('"/images/background_fallback.jpg"');

    // Location not found
    // Mock axios
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { photos: { photo: [] } }
      })
    );

    res = await request(server)
      .post("/api/picture")
      .expect(200);

    expect(res.text).toEqual('"/images/background_fallback.jpg"');
  });

  it("returns status 404 and a fallback picture if an error occurs", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject({
        response: { status: 400, statusText: "An error occurred" }
      })
    );

    const res = await request(server)
      .post("/api/picture")
      .expect(400);

    expect(res.text).toEqual(
      JSON.stringify({
        message: "An error occurred",
        fallbackPicture: "/images/background_fallback.jpg"
      })
    );
  });
});
