const fs = require("fs");
const data = require("./data.json")
//create
exports.post = function (req, res) {
  const keys = Object.keys(req.body);
  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!");
    }
  }
  
  let {avatar_url, birth, name, services, gender} = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.instructors.length + 1)


  data.instructors.push({
    id,
    avatar_url,
    name,
    gender,
    birth,
    services,
    created_at
  })

  let id_count

  data.id_count = id_count + 1

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!")
      return res.render("/instructors")
  })

};
//update

//delete