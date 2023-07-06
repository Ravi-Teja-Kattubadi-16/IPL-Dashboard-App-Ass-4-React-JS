// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  //   state = {recentMatchDetails: {}}

  //   componentDidMount() {
  //     this.getMatchCardDetails()
  //   }

  //   getMatchCardDetails = async () => {
  //     const {teamId} = this.props
  //     const response = await fetch(`https://apis.ccbp.in/ipl/${teamId}`)
  //     const matchCardData = await response.json()
  //     console.log(matchCardData)
  //     const updatedRecentMatches = matchCardData.recent_matches.map(
  //       eachMatch => ({
  //         competingTeam: eachMatch.competing_team,
  //         competingTeamLogo: eachMatch.competing_team_logo,
  //         data: eachMatch.data,
  //         firstInnings: eachMatch.first_innings,
  //         id: eachMatch.id,
  //         manOfTheMatch: eachMatch.man_of_the_match,
  //         matchStatus: eachMatch.match_status,
  //         secondInnings: eachMatch.second_innings,
  //         result: eachMatch.result,
  //         umpires: eachMatch.umpires,
  //         venue: eachMatch.venue,
  //       }),
  //     )
  //     console.log(updatedRecentMatches)
  //     this.setState({recentMatchDetails: updatedRecentMatches})
  //   }

  render() {
    const {eachMatch} = this.props
    const {result, secondInnings, matchStatus, competingTeamLogo} = eachMatch

    let matchWinOrLoss
    if (matchStatus === 'Won') {
      matchWinOrLoss = <p className="loss"> Lost </p>
    } else {
      matchWinOrLoss = <p className="won"> Lost </p>
    }

    return (
      //   <ul className="recent-matches-container">
      <li className="list-item-container">
        <img src={competingTeamLogo} className="team-image" alt="" />
        <h1 className="recent-team-name"> {secondInnings} </h1>
        <p className="match-status">{result}</p>
        {matchWinOrLoss}
      </li>
      //   </ul>
    )
  }
}
export default MatchCard
