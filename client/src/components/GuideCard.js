import React from 'react'
import { Link } from 'react-router-dom'
import GuidePage from './guidePage'


const GuideCard = (props) => (
            <Link to={`/guides/${props.id}`} exact="true">
                <div key={props.id} className="GuideCard">
                {props.name}
                {props.url}
                </div>
            </Link>
)

export default GuideCard