const request =  require('supertest')
const server =  require('../src/index')
const app = request(server)
describe('GET /api/welcome', () => {
    it('welcome message', async () => {
        const res =  await app
            .get('/api/welcome')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect('{"message":"Welcome to Traffic-Light!","status":"success"}')
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    })
})

describe("GET /api/trafficlight", () => {
    it('out of order', async () => {//??
        const res =  await app//??
            .get("/api/trafficlight")//??
            .expect('Content-Type', 'application/json; charset=utf-8')//??
            .expect('{"message":"OUT OF ORDER","status":"success"}')//??
            .then((res) => {//??
                expect(res.statusCode).toBe(200);//??
            })//??
    })//??
})

describe("GET /api/trafficlight/:color", () => {
    it.each([//??
        ["",/{"message":"OUT OF ORDER","status":"success"}/],//??
        ["green",/{"message":"WALK!","status":"success"}/],//??
        ["orange",/{"message":"ATTENTION!","status":"success"}/],//??
        ["red",/{"message":"DON'T WALK!","status":"success"}/],//??
        ])("When color is %s then %s", async (color,shouldBe) => {//??
        const res =  await app//??
            .get("/api/trafficlight/"+color)//??
            .expect('Content-Type', 'application/json; charset=utf-8')//??
            .expect(shouldBe)//??
            .then((res) => {//??
                expect(res.statusCode).toBe(200);//??
            })//??
    })//??
})

afterAll(async () => {
    server.close();
});
