import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()


function createJWT(id){
  const secret = process.env.SECRET
  const token = jwt.sign({id}, secret, {
    expiresIn: 999999
  }); 

  return token;
}

function verifyJWT(req, res, next){
  const secret = process.env.SECRET
  const authToken = req.headers.authorization

  if(!authToken){
    return res.status(500).json({error: "Invalid Token!"})
  }

  const [str, token] = authToken.split(' ')

  jwt.verify(token, secret, (err, decoded) => {
    if(err){
      return res.status(401).json({error: "Invalid Token"})
    } else {
      req.id = decoded.id;

      next()
    }
  })

}


export { createJWT, verifyJWT }
