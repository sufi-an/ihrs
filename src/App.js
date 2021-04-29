
import React, { Component } from 'react'
import Logo from './assets/bg.JPG';
import classes from './App.module.css'
import Card from './Card';
import {studentList} from './studentList';
import {topicList} from './topicList';
class  App extends Component{
  state={
    students:studentList,
    student:"",
    topicList:topicList,
    topic:"",
    prevList:0,
    prevTopic:0,
    
  }
  getRandom=(len)=>{
    let index=Math.floor(Math.random() * len);
    return index;
  }
  showStudent=()=>{
    let i=this.state.prevList;
    let index=this.getRandom(i); 
    let prev=parseInt(i)+1;
   /*  while(prev.find((e)=> e=== index)){ 
      index=Math.floor(Math.random() * i);
    } */
    this.setState({student:this.state.students[i]})
    //prev.push(index);
    this.setState({prevList:prev})
   
  }
  showTopic=()=>{
    let i=this.state.topicList.length;
    let index=this.getRandom(i); 
    while(this.state.prevTopic === index){ 
      index=Math.floor(Math.random() * i);
    }
    
    this.setState({topic:this.state.topicList[index]})
    this.setState({prevTopic:index})
  }
  render(){ 
    let student=null;
    let topic=null;
    if(this.state.student.length === 0){
      student=<Card data="Click The Button Below to Start"/>
    }
    else{
      student= <Card data={this.state.student}/>;
    }
    if(this.state.topic.length === 0){
      topic=<Card data="Click The Button Below to Start"/>
    }
    else{
      topic= <Card data={this.state.topic}/>;
    }
  return (
    <div>
    <div className={classes.Bg}>
      <div className={classes.CardContainer}>
     {student}
      <div>
        <button onClick={this.showStudent} >Generate Student Name</button>
      </div>
      </div>
      <div className={classes.CardContainer}>
     {topic}
      <div>
        <button onClick={this.showTopic}>Generate Topic </button>
      </div>
      </div>
    <span style={{color:'white', position:'absolute',bottom:'50px', right:'10px'}} >
      copyright &#169; AREA69
    </span>
    </div>
    </div>

  );
  }
}

export default App;
