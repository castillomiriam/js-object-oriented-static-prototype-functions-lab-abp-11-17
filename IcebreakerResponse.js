function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(userData){
    return new IcebreakerResponse(userData[0])
  })
}

const emails = [
  ["avi@flatironschool.com", "grace@hopper.com", "alan@xparc.com"]
]

let data = IcebreakerResponse.BatchCreate(data)
