const { TestWatcher } = require("jest");
const request = require("supertest");

//Describing a new test:
describe("Calling /posts with GET", () => {
    test("It should response with a 200 status code", async () => {
        const response = await request(app).get("/posts").send();
        expect(response.status).toBe(200);
    })
});



