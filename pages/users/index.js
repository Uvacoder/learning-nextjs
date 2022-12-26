import styles from "../../styles/Home.module.css"
import Link from "next/link"

const Users = ({ users }) => {
  return (
    <div className={styles.container}>
      <h2>Static Site Generation</h2>
      <h3>
        List of Users fetched from JSON Placeholder API, page generated at build
        time
      </h3>
      <hr />
      {users.map((user) => (
        <Link key={user.id} href={`users/${user.id}`}>
          <h4>
            {user.name} | {user.username} | {user.email}
          </h4>
        </Link>
      ))}
    </div>
  )
}

export default Users

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  return {
    props: {
      users: data,
    },
  }
}
