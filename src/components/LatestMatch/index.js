// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props

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
      <li>
        <div className="latest-matches-container-lg">
          <div className="team-details-container">
            <h1 className="team-name"> {competingTeam} </h1>
            <p className="date"> {date} </p>
            <p className="description">{venue} </p>
            <p className="description"> {result}</p>
          </div>

          <div className="logo-container">
            <img
              src={competingTeamLogo}
              alt={competingTeam}
              className="team-logo-alignment"
            />
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

        <div className="latest-matches-container-sm">
          <div className="first-container-sm">
            <div className="team-details-container">
              <h1 className="team-name"> {competingTeam} </h1>
              <p className="date"> {date} </p>
              <p className="description">{venue} </p>
              <p className="description"> {result}</p>
            </div>

            <div className="logo-container">
              <img
                src={competingTeamLogo}
                alt=""
                className="team-logo-alignment"
              />
            </div>
          </div>
          <hr className="horizontal-rule-sm" />

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
      </li>
    )
  }
}
export default LatestMatch
