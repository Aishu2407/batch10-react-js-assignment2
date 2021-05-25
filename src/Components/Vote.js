import React, { Component } from 'react'
import './Vote.css';
 class Vote extends Component {
    constructor(props){
        super(props)
    this.state={
        parties:[
            {name:"React",vote:0},
            {name:"JAVA",vote:0},
            {name:"HTML",vote:0},
            {name:"SPRINGS",vote:0},
        
        ]
    }
}
vote(i){
    let newPartyVote=this.state.parties;
    console.log("click on "+newPartyVote[i].name);
    newPartyVote[i].vote++;
    this.setState({parties:newPartyVote})
   // console.log(newPartyVote[i].vote);
}
    render() {
        return (
            <div>
                <h1>vote your language</h1>
                <div className="parties">
                    {
                        this.state.parties.map((party,i)=>
                        <div key={i} className='party'>
                            <div className="votecount">
                                
                            { party.vote}
                            </div>
                            <div className="partyName">
                                {party.name}
                            </div>
                            <button onClick={this.vote.bind(this,i)}>click me</button>
                            </div>
                               )
                    }
                </div>
            </div>
        )
    }
}

export default Vote;