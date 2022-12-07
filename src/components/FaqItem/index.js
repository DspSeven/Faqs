// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, checkFaqs, showAnswer, value} = props
  const {questionText, id, answerText} = faqDetails
  console.log(value)

  const showMinus = () => {
    showAnswer(id)
  }

  const getPlusOrMinus = () => {
    if (checkFaqs) {
      if (id === value) {
        return (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
              onClick={showMinus}
            />
            <p>{answerText}</p>
          </div>
        )
      }
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        alt="plus"
        onClick={showMinus}
      />
    )
  }

  return (
    <li>
      <h1>{questionText}</h1>
      {getPlusOrMinus()}
    </li>
  )
}

export default FaqItem
