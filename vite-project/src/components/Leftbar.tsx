import React from 'react'
import { Link } from 'react-router-dom'

const Leftbar = () => {
  return (
    		<section className="hidden sm:block  mt-16  px-6 py-10 flex-col justify-between min-w-67.5 z-100 bg-cyan-200 backdrop-blur-sm  ">
				<div className="flex flex-col gap-11 ">
					<Link to={""}>Dashboard</Link>
					<Link to={""}>Assets</Link>
					<Link to={""}>Assignments</Link>
					<Link to={""}>Maintenance</Link>
					<Link to={""}>Add Asset</Link>
					<Link to={""}>Report</Link>
				</div>
			</section>
  )
}

export default Leftbar