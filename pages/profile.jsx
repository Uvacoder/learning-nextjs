import styles from "../styles/Home.module.css"
const Profile = ({ profile }) => {
  return (
    <div className={styles.container}>
      <h2>Incremental Static Regeneration</h2>
      <h3>Profile fetched from JSON server, running locally at port 4000</h3>
      <hr />
      <h4>
        {profile.name} | {profile.company} | {profile.current_project}
      </h4>
    </div>
  )
}

export default Profile

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/profile")
  const data = await response.json()

  return {
    props: {
      profile: data,
    },
    revalidate: 10,
  }
}
