import React from 'react'
import { Link } from 'react-router-dom'

const GuideCard = ({guide}) => (
    <Link to={`/${guide.id}`} exact >
        <div key={guide.id} className="GuideCard">
            <h3>{guide.name}</h3>
        </div>
    </Link>
)

export default GuideCard