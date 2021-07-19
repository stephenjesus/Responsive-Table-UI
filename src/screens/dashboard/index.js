import React, { Component } from 'react';

import { BreadCrumb } from 'primereact/breadcrumb';

import { mockData } from '../../components/sampleData';

import { DataTableGridLines } from '../../components/DataTableGridLines';

const menuItems = [{ label: 'Courses' }];

const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <BreadCrumb className="breadcrumb" model={menuItems} home={home} />
                </div>
                <div>
                    <div className="manageCourses">Manage Courses ({mockData && mockData.length})</div>
                </div>
                <div className="dataTablePadding">
                    <DataTableGridLines />
                </div>
            </div>
        );
    }
}

export default Dashboard;