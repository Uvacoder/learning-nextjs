import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import styles from "../../styles/Home.module.css"
const DynamicAPI = () => {
  const router = useRouter()
  const { userId } = router.query
  const [userData, setUserData] = useState("")

  const fetchUserData = useCallback(async () => {
    const response = await fetch(`/api/user/${userId}`)
    const data = await response.json()
    setUserData(data)
  }, [userId])

  useEffect(() => {
    if (userId) {
      fetchUserData()
    }
  }, [fetchUserData])

  return (
    <div className={styles.container}>
      <h2>Dynamic API Route</h2>
      <h3>Fetch the data of the user provided userId</h3>
      <hr />
      <h4>{userData?.data}</h4>
    </div>
  )
}

export default DynamicAPI
