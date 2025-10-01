import React from "react";
import "../../../styles/Avatars.css";
import Header from '../Header/Header';
import EmployeeProfile from '../../sections/EmployeeProfile/EmployeeProfile';
import RequiredInfo from '../../sections/RequiredInfo/RequiredInfo';


const Avatars = () => {
	const employeeData = {
		initials: "MK",
		name: "Manoj Kandan M",
		genId: "255048878",
		email: "Manoj.kandan@partner.samsung.com",
		designation: "Outsourcing",
		division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
		manager: "Ravindra S R (06786669)",
		isOnline: true,
	};

	return (
		<div className="avatars-container">
			<Header
				breadcrumb="My Workspace > Incident Reporting"
				title="Incident Reporting -Report"
			/>

			<EmployeeProfile
				employee={employeeData}
			/>

			<RequiredInfo />

			
		</div>
	);
};

export default Avatars;
