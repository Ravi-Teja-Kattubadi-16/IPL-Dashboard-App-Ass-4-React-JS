// Write your code here
import Loader from 'react-loader-spinner'
import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  constructor(props) {
    super(props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    let bgClassName
    switch (id) {
      case 'RCB':
        bgClassName = 'rcb'
        break
      case 'KKR':
        bgClassName = 'kkr'
        break
      case 'KXP':
        bgClassName = 'k-xi-p'
        break
      case 'CSK':
        bgClassName = 'csk'
        break
      case 'RR':
        bgClassName = 'rr'
        break
      case 'MI':
        bgClassName = 'mi'
        break
      case 'SH':
        bgClassName = 'sh'
        break
      case 'DC':
        bgClassName = 'dc'
        break
      default:
        bgClassName = 'rcb'
        break
    }
    this.state = {
      formattedData: '',
      latestMatch: {},
      recentMatches: [],
      teamBannerUrl: '',
      isLoadingOrNot: true,
      bgClassNameValue: bgClassName,
    }
  }

  componentDidMount() {
    this.getTeamMatchesData()
    console.log(this.props)
  }

  updatedLatestMatch = () => {
    const {formattedData} = this.state
    const latestMatchDetails = formattedData.latest_match_details

    const updatedLatestMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    this.setState({latestMatch: updatedLatestMatchDetails})
  }

  updatedRecentMatches = () => {
    const {formattedData} = this.state
    const recentMatchesData = formattedData.recent_matches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      data: eachMatch.data,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      secondInnings: eachMatch.second_innings,
      result: eachMatch.result,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))
    this.setState({recentMatches: recentMatchesData, isLoadingOrNot: false})
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teamMatchesApiUrl = `https://apis.ccbp.in/ipl/${id}`
    const apiResponse = await fetch(teamMatchesApiUrl)
    const apiData = await apiResponse.json()
    // console.log(apiData)
    const teamBannerLink = apiData.team_banner_url
    this.setState({
      formattedData: apiData,
      teamBannerUrl: teamBannerLink,
    })
    this.updatedRecentMatches()
    this.updatedLatestMatch()
  }

  renderLoader = () => (
    <div className="loader-class">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  renderTeamMatches = () => {
    const {recentMatches, teamBannerUrl, latestMatch} = this.state

    return (
      <div className="matches-container">
        <div className="team-container">
          <img src={teamBannerUrl} alt="team banner" className="team-banner" />
          <p className="latest-matches-text"> Latest Matches </p>

          {/* <LatestMatch key={latestMatch.id} latestMatch={latestMatch} /> */}
        </div>

        <div className="recent-matches-container">
          <div className="latest-container">
            <LatestMatch key={latestMatch.id} latestMatch={latestMatch} />
          </div>
          <ul className="match-boxes-container">
            {recentMatches.map(eachMatch => (
              <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoadingOrNot, bgClassNameValue} = this.state

    return (
      <div className={`team-matches-container ${bgClassNameValue}`}>
        {isLoadingOrNot ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
