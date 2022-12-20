import React from "react";
import "../../css/admindash.css"
import {Navigate} from "react-router-dom";
import {userState} from "./User/userState"
import {useRecoilState} from "recoil";


export default function AdminDashboard() {
    const [{loggedIn, role}] = useRecoilState(userState)
    const columns = [
        {field: 'id', headerName: 'ID', width: 50},
        {field: 'firstName', headerName: 'First name', width: 130},
        {field: 'lastName', headerName: 'Last name', width: 130},
        {
            field: 'Sex',
            headerName: 'Sex',
            type: 'String',
            width: 10,
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'String',
            width: 180
        }
        , {
            field: 'role',
            headerName: 'Role',
            width: 100
        }
    ];
    const rows = [
        {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, Sex: 'M', email: "snow@gmail.com", role: "teacher"},
        {
            id: 2,
            lastName: 'Lannister',
            firstName: 'Cersei',
            age: 42,
            Sex: 'M',
            email: "lannister@gmail.com",
            role: "H-teacher"
        },
        {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, Sex: 'F', email: "lanni@gmail.com", role: "Admin"},
        {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, Sex: 'F', email: "stark@gmail.com", role: "teacher"},
        {
            id: 5,
            lastName: 'Targaryen',
            firstName: 'Daenerys',
            age: 31,
            Sex: 'M',
            email: "Targ@gmail.com",
            role: "H-teacher"
        },
        {
            id: 6,
            lastName: 'Melisandre',
            firstName: null,
            age: 33,
            Sex: 'M',
            email: "Malisandre@gmail.com",
            role: "teacher"
        },
        {
            id: 7,
            lastName: 'Clifford',
            firstName: 'Ferrara',
            age: 44,
            Sex: 'F',
            email: "clif@gmail.com",
            role: "teacher"
        },
        {
            id: 8,
            lastName: 'Frances',
            firstName: 'Rossini',
            age: 36,
            Sex: 'F',
            email: "frances@gmail.com",
            role: "teacher"
        },
        {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, Sex: 'M', email: "roxi@gmail.com,", role: "teacher"},
    ];

    if (loggedIn && role === 'admin') {
        return (
            <div>
                <p>Welcome to your Dashboard Administrator </p>
            </div>
        );

    } else if (loggedIn && role === 'h-teacher') {
        return (
            <div>
                <p>Welcome to your Dashboard Head Teacher </p>
            </div>
        );
    } else if (loggedIn && role === 'teacher') {
        return (
            <div>
                <p>Welcome to your Dashboard Teacher </p>
            </div>
        );
    } else {
        return <Navigate replace to="/login"/>;
    }
    // return <>
    //     <>{console.log(authenticated)}</>
    //     {/*{*/}
    //
    //     {/*    authenticated ?*/}
    //     {/*        <>*/}
    //     {/*            <Navigate replace to="/aa"/>;*/}
    //     {/*        </>*/}
    //     {/*        :*/}
    //     {/*        <>*/}
    //     {/*            <div style={{maxWidth: "70%"}}>*/}
    //     {/*                <div className="user">*/}
    //     {/*                    <UserInfo/>*/}
    //     {/*                </div>*/}
    //     {/*                <div className="container text-center">*/}
    //     {/*                    <div className="row">*/}
    //     {/*                        <div className="col">*/}
    //     {/*                            <div style={{display: "flex"}}>*/}
    //     {/*                                <div className="col-4">*/}
    //     {/*                                    <div className="cards">*/}
    //     {/*                                        <div className="card-header bg-transparent border-success">*/}
    //     {/*                                            <span className="heading">Members Available</span>*/}
    //     {/*                                            <hr/>*/}
    //     {/*                                        </div>*/}
    //     {/*                                        <span style={{display: "flex", justifyContent: "space-around"}}>*/}
    //     {/*                                    <span><h4>3/{rows.length} </h4></span>*/}
    //
    //     {/*                               <span><img src={teachers} alt="users" className="usersCard"/></span>*/}
    //     {/*                                </span>*/}
    //     {/*                                    </div>*/}
    //     {/*                                </div>*/}
    //     {/*                                <div className="col-4">*/}
    //     {/*                                    <div className="cards">*/}
    //     {/*                                        <div className="card-header bg-transparent border-success">*/}
    //
    //     {/*                                            <span className="heading">Students Available</span></div>*/}
    //     {/*                                        <hr/>*/}
    //     {/*                                        <span style={{display: "flex", justifyContent: "space-around"}}>*/}
    //     {/*                                    <span><h4>356</h4></span>*/}
    //     {/*                               <span><img src={students} alt="users" className="usersCard"/></span>*/}
    //     {/*                                </span>*/}
    //     {/*                                    </div>*/}
    //     {/*                                </div>*/}
    //     {/*                                <div className="col-4">*/}
    //     {/*                                    <div className="cards">*/}
    //     {/*                                        <div className="card-header bg-transparent border-success">*/}
    //     {/*                                            <span className="heading">Members Absent</span></div>*/}
    //     {/*                                        <hr/>*/}
    //     {/*                                        <span style={{display: "flex", justifyContent: "space-around"}}>*/}
    //     {/*                                    <span><h4>3/29</h4></span>*/}
    //     {/*                               <span><img src={absentUser} alt="users" className="usersCard"/></span>*/}
    //     {/*                                </span>*/}
    //     {/*                                    </div>*/}
    //     {/*                                </div>*/}
    //     {/*                                <div className="col-4" style={{marginRight: "0.5em"}}>*/}
    //     {/*                                    <div className="cards">*/}
    //     {/*                                        <div className="card-header bg-transparent border-success">*/}
    //     {/*                                            <span className="heading">staff available</span>*/}
    //     {/*                                            <hr/>*/}
    //     {/*                                        </div>*/}
    //     {/*                                        <span style={{display: "flex", justifyContent: "space-around"}}>*/}
    //     {/*                                    <span><h4>8/10</h4></span>*/}
    //     {/*                               <span><img src={users} alt="users" className="usersCard"/></span>*/}
    //     {/*                                </span>*/}
    //     {/*                                    </div>*/}
    //     {/*                                </div>*/}
    //     {/*                            </div>*/}
    //     {/*                        </div>*/}
    //     {/*                    </div>*/}
    //     {/*                </div>*/}
    //
    //     {/*                <div className="container text-center" style={{marginTop: "5px"}}>*/}
    //     {/*                    <div style={{display: "flex", justifyContent: "space-between"}}>*/}
    //     {/*            <span className="headings">*/}
    //     {/*            <b>Team</b>*/}
    //     {/*        </span>*/}
    //     {/*                    </div>*/}
    //     {/*                </div>*/}
    //     {/*                <div className="container text-center">*/}
    //     {/*                    <div style={{display: "flex", justifyContent: "space-between"}}>*/}
    //     {/*                        <div className="col-11">*/}
    //     {/*                            <div style={{height: 300, width: '100%'}}>*/}
    //     {/*                                <DataGrid*/}
    //     {/*                                    rows={rows}*/}
    //     {/*                                    columns={columns}*/}
    //     {/*                                    pageSize={5}*/}
    //     {/*                                    rowsPerPageOptions={[6]}*/}
    //     {/*                                    checkboxSelection*/}
    //     {/*                                />*/}
    //     {/*                            </div>*/}
    //     {/*                            <div style={{display: "flex", justifyContent: "space-between"}}>*/}
    //     {/*            <span className="headings">*/}
    //     {/*            <b>Statistics</b>*/}
    //     {/*        </span>*/}
    //     {/*                            </div>*/}
    //     {/*                            <hr/>*/}
    //     {/*                            <div className="col-11">*/}
    //     {/*                                <div className="container text-center">*/}
    //     {/*                                    <div className="row">*/}
    //     {/*                                        <div className="col-sm-5 col-md-6">*/}
    //     {/*                                            <div className="graph">*/}
    //     {/*                                                <Chart student="Male" percentages="56"/>*/}
    //     {/*                                            </div>*/}
    //     {/*                                        </div>*/}
    //     {/*                                        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">*/}
    //     {/*                                            <div className="graph">*/}
    //     {/*                                                <Chart*/}
    //     {/*                                                    student="Females" percentages="44"/>*/}
    //     {/*                                            </div>*/}
    //     {/*                                        </div>*/}
    //
    //     {/*                                    </div>*/}
    //     {/*                                </div>*/}
    //     {/*                            </div>*/}
    //     {/*                        </div>*/}
    //     {/*                        <div className="col-5">*/}
    //     {/*                            <div className="card">*/}
    //     {/*                                <DatePicker/>*/}
    //     {/*                            </div>*/}
    //     {/*                            <span className="headings">*/}
    //     {/*            <b>Employees</b>*/}
    //     {/*        </span>*/}
    //     {/*                            <div className="card">*/}
    //
    //     {/*                                <div className="people">*/}
    //
    //     {/*                                    <TotalAvatars/>*/}
    //     {/*                                </div>*/}
    //
    //     {/*                            </div>*/}
    //     {/*                        </div>*/}
    //     {/*                    </div>*/}
    //     {/*                </div>*/}
    //     {/*            </div>*/}
    {/*    /!*        </>*!/*/
    }
    {/*    /!*}*!/*/
    }
    {/*</>*/
    }
}
