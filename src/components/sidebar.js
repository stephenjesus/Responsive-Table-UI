import React from 'react';

import './sidebar.css';

export let sidNavOptionList = React.createRef();

const dashboardPages = {
    openApplications: '/dashboard/openApplication',
    dashboardReport: '/dashboard',
    activeApplication: '/dashboard/activeApplication',
    futureReference: '/dashboard/futureReference',
    viewApplication: '/dashboard/viewApplication',
    UserManagement: '/dashboard/userManagement',
    StartUpDashBoard: '/dashboard/startup',
    rejectedApplications: '/dashboard/rejectedApplications',
    portfolio: '/dashboard/portfolio',
    companies: '/dashboard/companies',
    listOfNewApplications: '/list/newApplication',
    closedApplications: '/list/closedApplication',
    newApplication: '/newApplication'
}

const {
    UserManagement, openApplications,
    futureReference, portfolio, rejectedApplications, companies,
    dashboardReport
} = dashboardPages;

const generateUrbanMenu = (currentPath) => {

    const getClassName = (dashboardPage, pathName) => {
        return dashboardPage === pathName ? "sidnav-option--active" : "sidnav-option"
    }
    return [
        {
            label: "Dashboard",
            image: require('../assets/images/dashboard.svg'),
            className: getClassName(dashboardReport, currentPath),
            value: dashboardReport
        },
        {
            label: "Profile",
            image: require('../assets/images/actyv-application-tick-icon.svg'),
            className: getClassName(openApplications, currentPath),
            value: openApplications
        },
        {
            label: "Students",
            image: require('../assets/images/circle-witharraow-icon.svg'),
            className: getClassName(futureReference, currentPath),
            value: futureReference
        },
        {
            label: "Courses",
            image: require('../assets/images/rejected-application-icon.svg'),
            className: "sidnav-option",
            value: rejectedApplications
        },
        {
            label: "Tests",
            image: require('../assets/images/portfolioTag.svg'),
            className: getClassName(portfolio, currentPath),
            value: portfolio
        },
        {
            label: "User Management",
            image: require('../assets/images/analyticsTag.svg'),
            className: "sidnav-option",
            value: companies
        },
        {
            label: "Settings",
            image: require('../assets/images/userMangmentIcon.svg'),
            className: getClassName(UserManagement, currentPath),
            value: UserManagement
        }
    ];
}

const makeOptionActive = (e) => {
    sidNavOptionList.current.childNodes.forEach((element, index) => {
        sidNavOptionList.current.childNodes[index].className = 'sidnav-option'
    });
    if (e.currentTarget.className === 'sidnav-option') e.currentTarget.className = 'sidnav-option--active'
}
const renderSideMenu = (inputFields) => {
    const { label, image, value, className } = inputFields;
    return <div className={className}
        onClick={(e) => {
            makeOptionActive(e);
            window.location.pathname.replace(value);
        }}>
        <img alt="defaultIcon" src={image.default} />
        <p>{label}</p>
    </div>
}

const expandCollapseSideBar = (className) => {
    const sideBarElement = document.getElementById("sidebar-container");
    if (sideBarElement) sideBarElement.classList.value = className;
}

export const Sidebar = (props) => {
    let { currentPath } = props;
    const sideBarFormPayload = generateUrbanMenu(currentPath)
    return (
        <div className="row" id="body-row" onMouseLeave={() => { expandCollapseSideBar("sidebar-collapsed") }} onMouseEnter={() => { expandCollapseSideBar("sidebar-expanded") }}>
            <div id="sidebar-container" className="sidebar-collapsed">
                <ul className="list-group">
                    <div className='sidnav'>
                        <div className='sidnav-optionList' ref={sidNavOptionList}>
                            {sideBarFormPayload.map(field => renderSideMenu(field))}
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}