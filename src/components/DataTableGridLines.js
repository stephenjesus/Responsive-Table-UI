import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { mockData, tableHeaders } from './sampleData';
import './DataTableDemo.css';

export class DataTableGridLines extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({ products: mockData })
  }

  renderTableRowData = (rowData, field, header) => {
    return (
      <React.Fragment>
        <span className="p-column-title">{header}</span>
        {rowData[`${field}`]}
      </React.Fragment>
    );
  }

  renderColumnData = (fields) => {
    const { field, header } = fields;
    return <Column sortable field={field} header={header} body={(rowData) => this.renderTableRowData(rowData, field, header)} />
  }
  render() {
    const { products } = this.state;
    return (
      <div className="datatable-responsive-demo">
        <div className="card">
          <DataTable value={products} className="p-datatable-responsive-demo" sortMode="multiple" paginator rows={10}
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown">
            {tableHeaders.map((eachRow) => this.renderColumnData(eachRow))}
          </DataTable>
        </div>
      </div>
    );
  }
}
