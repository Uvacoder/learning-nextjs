import styles from "../../styles/Home.module.css"

const Banks = ({ banks }) => {
  return (
    <div className={styles.container}>
      <h2>Server Side Rendering</h2>
      <h3>
        List of Bank account fetched from Random Data API, page generated on
        server side at request time
      </h3>
      <hr />
      {banks.map((bank) => (
        <ul key={bank.id}>
          <li>
            {bank.account_number} | {bank.bank_name}
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Banks

export async function getServerSideProps() {
  const response = await fetch(
    "https://random-data-api.com/api/v2/banks?size=5"
  )
  const data = await response.json()

  return {
    props: {
      banks: data,
    },
  }
}
