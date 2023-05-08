import React from 'react'
import { Table, Container, Badge } from 'react-bootstrap'

const Tables = () => {
  return (
    <div>
      <Container>
      <Table className='table-hover'>
      <thead>
        <tr>
          <th>Status</th>
          <th>Priority</th>
          <th>Reported by</th>
          <th>Reported date</th>
          <th>Assign to</th>
          <th>Assign date</th>
          <th>Due date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Badge pill bg='success'>Resolved</Badge></td>
          <td><Badge pill bg='warning'>Medium</Badge></td>
          <td>Otto</td>
          <td>08 May 2023 10:35</td>
          <td>Agus</td>
          <td>7 May 2023</td>
          <td>10 May 2023</td>
        </tr>
        <tr>
          <td><Badge pill bg='info'>Closed</Badge></td>
          <td><Badge pill bg='danger'>High</Badge></td>
          <td>Yadi</td>
          <td>08 May 2023 10:35</td>
          <td>Sapto</td>
          <td>7 May 2023</td>
          <td>10 May 2023</td>
        </tr>
        <tr>
          <td><Badge pill bg='secondary'>On progress</Badge></td>
          <td><Badge pill bg='dark'>Low</Badge></td>
          <td>Firman</td>
          <td>08 May 2023 10:35</td>
          <td>Lukman</td>
          <td>7 May 2023</td>
          <td>10 May 2023</td>
        </tr>
        <tr>
          <td><Badge pill bg='danger'>Assingned</Badge></td>
          <td><Badge pill bg='dark'>Low</Badge></td>
          <td>Firman</td>
          <td>08 May 2023 10:35</td>
          <td>Lukman</td>
          <td>7 May 2023</td>
          <td>10 May 2023</td>
        </tr>
      </tbody>
      </Table>
      </Container>
    </div>
  )
}

export default Tables