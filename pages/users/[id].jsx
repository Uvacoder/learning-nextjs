import styles from "../../styles/Home.module.css"
import { useRouter } from "next/router"

const User = ({ user }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <h4>
        {user.name} | {user.username} | {user.email}
      </h4>
      <h5>
        {user.phone} | {user.website} | {user.company.name}
      </h5>
      <p>
        {user.address.street}, {user.address.suite}
      </p>
      <p>
        {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  )
}

export default User

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
    ],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const data = await response.json()

  return {
    props: {
      user: data,
    },
  }
}
