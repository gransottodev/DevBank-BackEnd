function Register(req, res, next){
  let erros = [];

  !req.body.firstName && erros.push("Firstname is required!")
  !req.body.lastName && erros.push("Lastname is required!");
  !req.body.email && erros.push("Email is required!");
  !req.body.age && erros.push("Age is required!");
  !req.body.phoneNumber && erros.push("Phone number is required!");
  !req.body.password && erros.push("Password is required!");
  !req.body.confirmPassword && erros.push("Confirm password is required!");
  req.body.password !== req.body.confirmPassword ? erros.push("Passwords must be the same!") : null


  if (erros.length > 0){
    return res.status(400).json({erro: erros.join(", ")});
  }
  next()
}

function Login(req, res, next){
  let erros = [];

  !req.body.email && erros.push("Email is required!")
  !req.body.password && erros.push("Password is required!");

  if (erros.length > 0){
    return res.status(400).json({erro: erros.join(", ")});
  }
  next()
}

export default {Register, Login};