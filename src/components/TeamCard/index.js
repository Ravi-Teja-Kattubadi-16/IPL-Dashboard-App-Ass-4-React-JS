// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props
    const {id, name, teamImageUrl} = eachTeam
    return (
      <Link to={`/team-matches/${id}`} className="list-item-link-value">
        <li className="team-card-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <h1 className="team-name-value"> {name} </h1>
        </li>
      </Link>
    )
  }
}

export default TeamCard
// id
// :
// "RCB"
// name
// :
// "Royal Challengers Bangalore"
// teamImageUrl
// :
// "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png"
// [[Prototype]]
// :
// Object

//  state = { currentTeamDetails: {}}

// componentDidMount(){
// this.getTeamMatchesDetails()
// }

//     getTeamMatchesDetails = async () => {
//     const response = await fetch(`https://apis.ccbp.in/ipl/DC`)
//     const data = response.json()
//     console.log(data)
