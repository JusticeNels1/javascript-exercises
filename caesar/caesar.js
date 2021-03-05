const caesar = function(str,shift) {

    cipherer = (char,shift) => {
            let fuck = shift % 26
            let cipheredUni = char.charCodeAt() + fuck
            let cipheredChar = String.fromCharCode(cipheredUni)
            let wrapUni = 96 + (fuck - (122 - char.charCodeAt()))
            let negWrapUni = 122 - Math.abs(fuck + (char.charCodeAt() - 96))

            if (cipheredUni > 122) {
                cipheredChar = String.fromCharCode(wrapUni)
            }
            else if (cipheredUni < 97) {
                cipheredChar = String.fromCharCode(negWrapUni)
            }

        return cipheredChar;
    }

  return Array.from(str).map(char => {
      if (char.toLowerCase().charCodeAt() < 97 || char.toLowerCase().charCodeAt() > 122) {
          return char
        }
        if(char == char.toUpperCase()){
            return cipherer(char.toLowerCase(),shift).toUpperCase()
        }
      return cipherer(char,shift)
    }).join('')
}

module.exports = caesar
