import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { BreadCrumb } from 'primereact/breadcrumb';

import { mockData } from '../../components/sampleData';

import { DataTableGridLines } from '../../components/DataTableGridLines';

import SearchIcon from '@material-ui/icons/Search';

import Grid from '@material-ui/core/Grid';

import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

import InputAdornment from '@material-ui/core/InputAdornment';

import FilledInput from '@material-ui/core/FilledInput';

const menuItems = [{ label: 'Courses' }];

const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }


const useStyles = makeStyles((theme) => ({

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        backgroundColor: "#36454f"
    },
    fab: {
        backgroundColor: "#ffab40",
        color: "#fff"
    }
}));

export default function Dashboard() {

    const classes = useStyles();

    return (
        <div style={{ paddingLeft: 50 }}>
            <div>
                <BreadCrumb className="breadcrumb" model={menuItems} home={home} />
            </div>
            <div>
                <Grid container style={{ justifyContent: 'left', marginTop: "1.5%", marginLeft: 20, alignContent: "center" }}>
                    <Grid item sm={6} md={6} xs={12} >
                        <div className="manageCourses">Manage Courses ({mockData && mockData.length})</div>
                    </Grid>
                    <Grid container item sm={12} md={6} xs={12} > 
                    <Grid item sm={4} md={4} xs={0} ></Grid>
                    <Grid item sm={6} md={6} xs={10}>
                        <FilledInput className="inputPadding"
                            style={{ marginTop: 9, height: 45, alignSelf: 'center', textAlign: 'center' }}
                            fullWidth
                            placeholder="Enter course name to search"
                            id="filled-adornment-weight"
                            value={""}
                            endAdornment={<InputAdornment position="end"> <SearchIcon /></InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </Grid>
                    <Grid item sm={1} md={1} xs={1} style={{ marginTop: 9 , display: 'flex' , justifyContent: 'center'}}>
                            <Fab size="small" aria-label="Add" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Grid>
                    </Grid>
            
                </Grid>
            </div>
            <div>
                <Grid
                    style={{ paddingLeft: "4%", paddingBottom: 25 }}
                    container
                    direction="row"
                    justifyContent="left"
                    alignItems="center"
                >
                    <span className={"bulkIcon"}>
                        <SearchIcon />
                        <labe style={{ marginLeft: 3 }}>Bulk Create</labe>
                    </span>

                    <span className={"bulkIcon"} style={{ marginLeft: 15 }}>
                        <SearchIcon />
                        <labe style={{ marginLeft: 3 }}>Bulk Update/Edit</labe>
                    </span>

                    <span className={"bulkIcon"} style={{ marginLeft: 15 }}>
                        <SearchIcon />
                        <labe style={{ marginLeft: 3 }}>Bulk Enroll</labe>
                    </span>
                </Grid>
            </div>

            <div className="dataTablePadding">
                <DataTableGridLines />
            </div>
        </div>
    );
}
