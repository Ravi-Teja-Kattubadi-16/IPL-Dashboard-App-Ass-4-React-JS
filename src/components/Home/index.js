// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getAllMatchedData()
  }

  getAllMatchedData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data.teams)
    const updatedTeams = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    // console.log(updatedTeams)
    this.setState({teamsList: updatedTeams})
  }

  render() {
    const {teamsList} = this.state

    return (
      <div className="home-container">
        <div className="ipl-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading"> IPL Dashboard </h1>
        </div>
        <ul className="team-cards-container">
          {teamsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
