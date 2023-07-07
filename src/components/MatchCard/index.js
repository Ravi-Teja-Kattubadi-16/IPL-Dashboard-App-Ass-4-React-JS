// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {eachMatch} = this.props
    const {result, competingTeam, matchStatus, competingTeamLogo} = eachMatch

    let matchWinOrLoss
    if (matchStatus === 'Won') {
      matchWinOrLoss = <p className="loss"> Lost </p>
    } else {
      matchWinOrLoss = <p className="won"> Won </p>
    }

    return (
      <li className="list-item-container">
        <img
          src={competingTeamLogo}
          className="team-image"
          alt={competingTeam}
        />
        <h1 className="recent-team-name"> {competingTeam} </h1>
        <p className="match-status">{result}</p>
        {matchWinOrLoss}
      </li>
    )
  }
}

export default MatchCard
