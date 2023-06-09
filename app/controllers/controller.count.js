import Count from '../models/Count.js'
import connection from '../config/db.js'


async function GetCounters(req, res){
  connection()
  const userID = req.id
  const data = await Count.find({userID})

  res.status(200).json({data})
}



async function CreateCount(req, res){
  connection()
  const {id, description} = req.body
  const date = new Date().toUTCString()

  const count = new Count({
    userID : id,
    description,
    createdAt: date,
    time: 0
  })

  try{
    await count.save()
    res.status(201).json({msg : "Count created!"})
  }
  catch(error){
    res.status(404).json({error})
  }
}


async function InsertCount(req, res){
  const countID = req.body.id
  const counted = req.body.time
  const userID = req.id
  
  await connection()
  const data = await Count.findById(countID)
  const newTime = counted

  if(userID !== data.userID){
    return res.status(404).json({error : "Unauthorized!"})
  }

  try{
    await Count.updateOne({_id: countID}, {
      time: newTime
    })
    res.status(200).json({msg : "Updated!"})
  }
  catch(err){
    res.status(500).json({err})
  }

}


async function GetCounter(req, res){
  const countID = req.params.id
  const userID = req.id

  await connection()
  const data = await Count.findById(countID)

  if(userID !== data.userID){
    return res.status(404).json({error : "Unauthorized!"})
  }

  try{
    res.status(200).json({data})
  }
  catch(err){
    res.status(500).json({err})
  }
}

async function DeleteCounter(req, res) {
  const countID = req.body.id
  const userID = req.id

  await connection()
  const data = await Count.deleteOne({_id : `${countID}`})

  try{
    res.status(200).json({data})
  }
  catch(err){
    res.status(500).json({err})
  }
}

export default {CreateCount, InsertCount, GetCounters, GetCounter, DeleteCounter};