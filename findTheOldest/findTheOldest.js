let findTheOldest = function(people) {
   

    return people.reduce((oldestP,currP) => {
       const oldestAge = getAge(oldestP. yearOfDeath,oldestP. yearOfBirth);
       const currAge = getAge(currP. yearOfDeath,currP. yearOfBirth);
       return (currAge > oldestAge ? currP : oldestP);
    },)

}
    const getAge = function(death,birth) {
        if (!death) {
            death = new Date().getFullYear()
        }
        return death - birth
    }


module.exports = findTheOldest
