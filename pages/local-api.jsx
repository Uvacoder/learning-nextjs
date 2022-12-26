import { useState } from "react"
import styles from "../styles/Home.module.css"

const LocalAPIRoute = () => {
  const [profile, setProfile] = useState({})
  const [updateProfile, setUpdateProfile] = useState({
    name: "Anupam Chakrawarti",
    company: "Crownstack",
    current_project: "Bugplot",
  })

  const makeGetReq = async () => {
    const response = await fetch("/api/user-data")
    const data = await response.json()
    setProfile(data.profile)
  }

  const makePostReq = async () => {
    const response = await fetch("/api/user-data", {
      method: "POST",
      body: JSON.stringify({ updateProfile }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json()
    setProfile(data)
  }

  return (
    <div className={styles.container}>
      <h2>API Route</h2>
      <h3>GET & POST with backend running locally at /api</h3>
      <div>
        <button onClick={makeGetReq}>
          GET <b>/api/user-data</b>
        </button>{" "}
        |
        <span>
          |{" "}
          <input
            type="text"
            placeholder="Project Update"
            onChange={(e) =>
              setUpdateProfile({
                ...updateProfile,
                current_project: e.target.value,
              })
            }></input>
          <button onClick={makePostReq}>
            POST <b>/api/user-data</b>
          </button>
        </span>
      </div>
      <hr />
      {Object.keys(profile).length ? (
        <h4>
          {profile.name} | {profile.company} | {profile.current_project}
        </h4>
      ) : null}
    </div>
  )
}

export default LocalAPIRoute
