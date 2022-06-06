const {User, connection}=require('../../src/database/postgres.js')

const exampleUser={email:"examplemail@gmail.com",password:"password",name:"Usuario 1",country:"Argentina",province_state:"BSAS",rol:"client"}

describe('Users model', () => {
  beforeAll(async () => {
    await connection.sync({ force: true });
  });
  it('should create a user if all fields are valid',async()=>{
    try {
      const user=await User.create(exampleUser)
      expect(user).toBeDefined()
    } catch (error) {
      expect(error.message).not.toBeDefined();
    }
  })
  it('should not create user if email is not provided',async()=>{
    try {
      await User.create({email:null})
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  })
  afterAll(async () => {
    await connection.sync({ force: true });
    connection.close();
  })
});
