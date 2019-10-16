let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();
chai.use(chaiHttp);
const expect=chai.expect;
/*
Testing for the /getData url
*/
describe('/GET latest result data',()=>{
    it('It should get latest one record of result',(done)=>{
        chai.request('http://localhost:3000')
        .get('/getData')
        .end((err,res)=>{
            expect(res).to.have.status(200);
            done();
        });
    });
});
/*
Testing for the /saveData url
*/
describe('/POST result data',()=>{
    it('It should post user input result data',(done)=>{
        const resultObj={
            number1:2,
            number2:3,
            result:6
        };
        chai.request('http://localhost:3000')
        .post('/saveData')
        .send(resultObj)
        .end((err,res)=>{
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            done();
        });
    });
});



