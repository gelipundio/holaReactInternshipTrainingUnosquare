import React, {Component} from 'react'
import TableRow from './TableRow'

export default class Table extends Component {

  componentDidMount () {
    console.log(this.props.personas)
  }

  render () {
    const {personas} = this.props
    return (<table>
      <thead>
        <tr>
          <th> name </th>
          <th> age </th>
        </tr>
      </thead>
      <tbody>
        {personas.map(p => <TableRow name={p.name} age={p.age} />)}
      </tbody>
    </table>)
  }
}
