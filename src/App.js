import './App.css';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { BreadCrumb } from 'primereact/breadcrumb';

import { mockData } from './components/sampleData';

import { DataTableGridLines } from './components/DataTableGridLines';

const items = [
  { label: 'Courses' }
];

const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }

function App() {
  return (
    <div className="App">
      <div>
      <BreadCrumb className="breadcrumb" model={items} home={home}/>
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

export default App;
