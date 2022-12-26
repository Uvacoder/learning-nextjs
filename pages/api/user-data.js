import userdata from "../../db.json"
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(userdata)
  } else if (req.method === "POST") {
    const profileData = req.body.updateProfile
    userdata.profile = profileData
    res.status(201).json(profileData)
  }
}
