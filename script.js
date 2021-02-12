
document.getElementById("generate").addEventListener('click', () => {
  let criteria = confirm(
    `The following password criterias are available:
    Character length (8-128)
    lowercase
    UPPERCASE
    Symbols?! 
    Numbers 123`)
  if (!criteria) {
    console.log('Password has been generated on the webpage.')
  }
  else {

    let hasLength = prompt('Password Length? (Minimum 8 characters, maximum 128 characters)')
    while ((hasLength > 128) || (hasLength < 8)) {
      alert("Please select a numerical value between 8 and 128.")
      hasLength = prompt('Password Length? (Minimum 8 characters, maximum 128 characters)')
    }
    let hasLowercase = confirm('Include lowercase characters?')
    let hasUppercase = confirm('Include uppercase characters?')
    let hasSymbols = confirm('Include symbols?')
    let hasNumbers = confirm('Include numbers?')
    charSet = ""
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const symbols = '!@#$%^&*'
    const numbers = '1234567890'
    let generatedPassword = ""

    if (hasLowercase) {
      charSet += lowercase
    }
    if (hasUppercase) {
      charSet += uppercase
    }
    if (hasSymbols) {
      charSet += symbols
    }
    if (hasNumbers) {
      charSet += numbers
    }

    for (let i = 0; i < hasLength; i++) {
      generatedPassword += charSet[Math.floor(Math.random() * charSet.length)]
    }
    document.getElementById('password').textContent = generatedPassword
  }
})