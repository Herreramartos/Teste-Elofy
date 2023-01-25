
import NavBar from './components/navbar'

function validatePalindrome(word:string){
  const lowCaseWord = word.toLocaleLowerCase()
  const wordLength = word.length

  const lowCaseWordArray = lowCaseWord.split('')

  const reversedWord:string[] = []

  lowCaseWordArray.forEach((letter, index) => reversedWord[wordLength - index -1] = letter)

  let isPalindrome = true

  lowCaseWordArray.forEach((letter, index) => {
    if(letter !== reversedWord[index]){
      isPalindrome = false
    }
  })

  console.log(isPalindrome)
  return isPalindrome
}

console.log('valido, palavra arara' ,validatePalindrome('arara'))
console.log('invalido, palavra palíndromo' ,validatePalindrome('palíndromo'))

function App() {
  return (
    <NavBar />

  )
}

export default App
