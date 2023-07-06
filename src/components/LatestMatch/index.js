// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  state = {latestMatch: {}}

  componentDidMount() {
    this.latestMatchDetails()
  }

  latestMatchDetails = async () => {
    const {teamId} = this.props
    const response = await fetch(`https://apis.ccbp.in/ipl/${teamId}`)
    const data = await response.json()
    // console.log(data)
    const updatedLatestMatchDetails = {
      id: data.latest_match_details.id,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    // console.log(updatedLatestMatchDetails)
    this.setState({latestMatch: updatedLatestMatchDetails})
  }

  render() {
    const {teamId} = this.props
    // console.log(`k-> ${teamId}`)
    const {latestMatch} = this.state
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatch

    return (
      <div className="latest-matches-container">
        <div className="team-details-container">
          <h1 className="team-name"> {firstInnings} </h1>
          <p className="date"> {date} </p>
          <p className="description">{venue} </p>
          <p className="description"> {result}</p>
        </div>

        <div className="logo-container">
          <img src={competingTeamLogo} alt="" className="team-logo-alignment" />
        </div>

        <div className="innings-container">
          <h1 className="innings-heading"> First Innings </h1>
          <p className="team-description"> {firstInnings} </p>
          <h1 className="innings-heading"> Second Innings </h1>
          <p className="team-description"> {secondInnings} </p>
          <h1 className="innings-heading"> Man Of The Match </h1>
          <p className="team-description"> {manOfTheMatch} </p>
          <h1 className="innings-heading"> Umpires </h1>
          <p className="team-description">{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
