const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// faker: create a class

class User {
    constructor(){
        this.id = faker.random.numeric()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.number()
        this.email = faker.internet.email(this.firstName, this.lastName)
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        this.id = faker.random.numeric()
        this.name = faker.company.name()
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.stateAbbr(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

const data = {
    users:[],
    companies:[]
}

// Routes
app.get("/api/users/companies", (req, res) => {
    res.json(data)
})
app.post("/api/users/new", (req, res) => {
    const newUser = new User()
    data.users.push(newUser)
    res.json(data.users)
})
app.post("/api/companies/new", (req, res) => {
    const newCompany = new Company()
    data.companies.push(newCompany)
    res.json(data.companies)
})
app.post("/api/user/company", (req, res) => {
    const newCompany = new Company()
    const newUser = new User()
    data.companies.push(newCompany)
    data.users.push(newUser)
    res.json(data)
})


app.listen( port, () => console.log(`listening on port ${port}`));