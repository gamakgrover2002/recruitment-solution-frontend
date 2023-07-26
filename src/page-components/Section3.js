import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Section3() {
  return (
    <div id = "container4">
    <div>
    <FontAwesomeIcon icon="fa-solid fa-phone" shake /><p>14*7 shake</p><br />
    <FontAwesomeIcon icon="fa-solid fa-chart-simple" beatFade /><p>Best Recruitment stats</p><br />
    <FontAwesomeIcon id = "icon" icon="fa-solid fa-globe" flip/><p>World-wide Collaboration</p>
    </div>
   </div>
  )
}

export default Section3