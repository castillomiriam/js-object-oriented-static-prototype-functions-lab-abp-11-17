function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(emails){
  return data.map(function(email){
    return new IcebreakerResponse(emails[0])
  })
}

const emails = ["avi@flatironschool.com", "grace@hopper.com", "alan@xparc.com"]
const IcebreakerResponses = IcebreakerResponse.BatchCreate.(emails)

