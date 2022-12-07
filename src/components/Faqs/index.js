// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    checkFaqs: false,
    faqsAnswer: '',
    faqsValue: '',
  }

  showAnswer = id => {
    const {faqsList} = this.props
    const {checkFaqs} = this.state
    const FilteredFaqs = faqsList.filter(eachFaqs => eachFaqs.id === id)
    const answer = FilteredFaqs[0].answerText
    const value = FilteredFaqs[0].id
    console.log(value)
    //
    this.setState({faqsAnswer: answer, faqsValue: value, checkFaqs: !checkFaqs})
  }

  render() {
    const {faqsList} = this.props
    const {checkFaqs, faqsAnswer, faqsValue} = this.state

    return (
      <div>
        <div>
          <h1>FAQs</h1>
          {faqsList.map(eachFaqs => (
            <FaqItem
              faqDetails={eachFaqs}
              key={eachFaqs.id}
              checkFaqs={checkFaqs}
              showAnswer={this.showAnswer}
              faqsAnswer={faqsAnswer}
              faqsList={faqsList}
              value={faqsValue}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default Faqs
