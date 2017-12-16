function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(email) {
  return emails.map(function(email) {
    return new IcebreakerResponse(email)
  })
}
