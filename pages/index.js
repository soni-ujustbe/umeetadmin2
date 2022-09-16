import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import { useTable } from 'react-table'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Page({ datalist }) {
  // console.log("all data", datalist);


  return (
    <div>

      <h1>All Meeting Data</h1>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Sr</th>
            <th>meetingId</th>
            <th>From User</th>
            <th>To User</th>
            <th>Meeting Agenda</th>
            <th>Meeting Code</th>
            <th>Meeting Date</th>
          </tr>
        </thead>
        <tbody>
          {datalist.map((album, idx) => (
            // console.log(album)
            <tr key={idx}>
              <td>
                {idx + 1}
              </td>
              <td>
                {album.meetingId}
              </td>
              <td>
                {album.fromUserName}
              </td>
              <td>
                {album.toUsersList && album.toUsersList.map((data) => <ul><li>To User : {data.toUserName}</li><li>Status : {data.status}</li></ul>)}
              </td>
              <td>
              {album.agenda }
              </td>
              <td>{album.meetingCode}</td>
              <td>
                {album.meetingDate}
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.ujustbe.com/Meeting/details`)
  const data = await res.json()
  const datalist = data.data.meetingList

  console.log("tottal data", datalist);

  // Pass data to the page via props
  return { props: { datalist } }
}

export default Page