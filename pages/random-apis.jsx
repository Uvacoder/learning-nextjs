import styles from "../styles/Home.module.css"
import useSWR from "swr"

const fetcher = async () => {
  const response = await fetch("https://api.publicapis.org/random")
  const data = await response.json()
  return data
}

const RandomAPI = () => {
  const { data, error } = useSWR("random-api", fetcher)

  return (
    <div className={styles.container}>
      <h2>Client Side Rendering</h2>
      <h3>Data fetched using SWR</h3>
      <hr />
      {error ? "There was an error while trying to fetch Random APIs" : null}
      {!data ? (
        "Please wait while data is being loaded"
      ) : (
        <>
          <h4>
            {data.entries[0].API} | {data.entries[0].Category}
          </h4>
          <p>
            {data.entries[0].Description}
            <br />
            <a
              className={styles.link}
              href={data.entries[0].Link}
              target="_blank"
              rel="noreferrer">
              {data.entries[0].Link}
            </a>
          </p>
        </>
      )}
    </div>
  )
}

export default RandomAPI
