import styles from "../styles/Home.module.css"
const DynamicAPI = () => {
    return (
    <div className={styles.container}>
      <h2>Dynamic API Route</h2>
      <h3>Fetch the data of the user provided userId</h3>
      <hr />
      <h4>
        {profile.name} | {profile.company} | {profile.current_project}
      </h4>
    </div>
}

export default DynamicAPI