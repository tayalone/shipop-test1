import React, { useState } from 'react'

// const regex = /(\d+)(,\s*\d+)*/gm
// const regexObj = new RegExp(regex)

// var patt = new RegExp(/(\d+)(,\s*\d+)*/)

function index() {
  const [list, setList] = useState('')

  const hangerOnChangedList = (e) => {
    const newList = e.target.value
    setList(newList)
  }

  const splitList = list.split(',')

  return (
    <div>
      Welcome to Next.js!!!
      <div>
        <label>List</label>
        <input onChange={hangerOnChangedList} />
      </div>
      <div>
        <label>ค้นหา</label>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
      <div>
        <label>Result</label>
        <div></div>
      </div>
    </div>
  )
}

export default index
