const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('should return status 200 and text', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Intermediate Jenkins pipeline');
  });
});
