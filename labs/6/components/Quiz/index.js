import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import questions from './questions.json'


const startState = 0
const questionState = 1

export default class Quiz extends React.Component {
  constructor(props){
    super()
    this.state = {
      firstState: startState,
      score: 0,
      currentQuestion: 0
    }
  }
 nextQuestion(answer){
   if(answer.correct){
     this.setState({score: this.state.score+1})
   }
     this.setState({currentQuestion: this.state.currentQuestion+1})
 }

 render() {
  return (
    <View>
      {(this.state.firstState === startState)?
      <View>
        <Text style={styles.title}>React Review Quiz</Text>
        <Button style={styles.button} title="Begin Quiz"
        onPress={() => this.setState({ firstState: questionState })}
        />
        </View>
        : (this.state.currentQuestion < questions.length) ?
          <View>
            <Text style={styles.text}>{questions[this.state.currentQuestion].question}</Text>
            <View>
              {questions[this.state.currentQuestion].answers.map((ans, i) => {
                return <Button 
                title={ans.text} 
                style={styles.button}
                key={i} 
                onPress={() => this.nextQuestion(ans)} />
              })}
            </View>
          </View> :
          <View>
            <Text>You finished the quiz.</Text>
            <Text>Your Score: {this.state.score} out of {questions.length}</Text>
            <Button 
            title="Give it another try." 
            style={styles.button}
            onPress={() => this.setState({ firstState: startState, currentQuestion: 0, score: 0 })} />
          </View>
      }
    </View>
   )
 }
}

const styles = StyleSheet.create({
  
  title:{
    fontFamily: "Helvetica",
    fontSize:25,
    color:"green"

 },
 button:{
   fontSize:15
 },
 text:{
   fontSize: 18,
   color: "blue"
 }

})