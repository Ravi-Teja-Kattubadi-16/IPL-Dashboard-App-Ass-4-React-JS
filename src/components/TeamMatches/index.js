// Write your code here
import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    recentMatches: {},
    teamBannerUrl: '',
    teamId: '',
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({teamId: id})
    console.log(`ipl id-> ${id}`)
    const url = `https://apis.ccbp.in/ipl/${id}`
    console.log(`url->${url}`)
    const apiResponse = await fetch(url)
    // console.log(`values ${await apiResponse.json()}`)
    const apiData = await apiResponse.json()
    console.log(`api-result-> ${apiData}`)

    // fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(response => console.log(response))

    // console.log(response)
    // const updatedRecentMatches = data.recent_matches.map(eachMatch => ({
    //   competingTeam: eachMatch.competing_team,
    //   competingTeamLogo: eachMatch.competing_team_logo,
    //   data: eachMatch.data,
    //   firstInnings: eachMatch.first_innings,
    //   id: eachMatch.id,
    //   manOfTheMatch: eachMatch.man_of_the_match,
    //   matchStatus: eachMatch.match_status,
    //   secondInnings: eachMatch.second_innings,
    //   result: eachMatch.result,
    //   umpires: eachMatch.umpires,
    //   venue: eachMatch.venue,
    // }))
    // const teamBannerUrl = data.team_banner_url
    // console.log(teamBannerUrl)
    // console.log(`updated-> ${updatedRecentMatches}`)

    // console.log(updatedLatestMatchDetails)
    // this.setState({
    //   recentMatches: updatedRecentMatches,
    //   teamBannerUrl,
    // })
    // const {
    //   latestMatchDetails,
    //   recentMatches,
    //   teamBannerUrl,
    // } = updatedTeamMatchesData

    // const recentMatches = updatedTeamMatchesData.recentMatches
    // const updatedLatestMatchDetails = {
    //   id: latestMatchDetails.id,
    //   competingTeam: latestMatchDetails.competing_team,
    //   competingTeamLogo: latestMatchDetails.competing_team_logo,
    //   date: latestMatchDetails.date,
    //   firstInnings: latestMatchDetails.first_innings,
    //   manOfTheMatch: latestMatchDetails.man_of_the_match,
    //   matchStatus: latestMatchDetails.match_status,
    //   result: latestMatchDetails.result,
    //   secondInnings: latestMatchDetails.second_innings,
    //   umpires: latestMatchDetails.umpires,
    //   venue: latestMatchDetails.venue,
    // }
    // console.log(lateshMatchDetails)
  }

  render() {
    const {recentMatches, teamBannerUrl, teamId} = this.state
    // console.log(latestMatchDetails)
    // console.log(`recentmatches-> ${recentMatches}`)

    return (
      <div className="team-matches-container">
        <div className="team-container">
          <img src={teamBannerUrl} alt="" className="team-banner" />
          <p className="latest-matches-text"> Latest Matches </p>

          <LatestMatch key={teamId} teamId={teamId} />
        </div>

        <ul className="recent-matches-container">
          {/* {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
          ))} */}

          {/* <MatchCard eachMatch={recentMatches[0]} /> */}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
// {
//   "team_banner_url": "https://assets.ccbp.in/frontend/react-js/kkr-team-img.png",
//   "latest_match_details": {
//     "umpires": "CB Gaffaney, VK Sharma",
//     "result": "Kolkata Knight Riders Won by 7 wickets",
//     "man_of_the_match": "Shubman Gill",
//     "id": "1216545",
//     "date": "2020-09-26",
//     "venue": "At Sheikh Zayed Stadium, Abu Dhabi",
//     "competing_team": "Sunrisers Hyderabad",
//     "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
//     // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
//     "first_innings": "Sunrisers Hyderabad",
//     "second_innings": "Kolkata Knight Riders",
//     "match_status": "Won",
//   },
//   "recent_matches": [
//     {
//       "umpires": "RK Illingworth, K Srinivasan",
//       "result": "Royal Challengers Bangalore Won by 82 runs",
//       "man_of_the_match": "AB de Villiers",
//       "id": "1216540",
//       "date": "2020-10-12",
//       "venue": "At Sharjah Cricket Stadium, Sharjah",
//       "competing_team": "Royal Challengers Bangalore",
//       "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
//       // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
//       "first_innings": "Royal Challengers Bangalore",
//       "second_innings": "Kolkata Knight Riders",
//       "match_status": "Lost",
//     },
//     ...
//   ],
// }
