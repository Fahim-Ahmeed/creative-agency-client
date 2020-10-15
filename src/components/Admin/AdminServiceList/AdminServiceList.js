import React from 'react';
import SideNav from '../../SharedComponents/SideNav/SideNav';
import Topbar from '../../SharedComponents/TopNav/Topbar';
import './AdminServiceList.css'

const AdminServiceList = () => {
    return (

<section className='ClientDashboard'>
            <div className='row'>
                <SideNav></SideNav>
                <div className="col-md-10 p-0">
                    <Topbar></Topbar>
                    <div className='service-list p-4'>
            <div className="all-services p-4">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Project Detail</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          <tr>
                              <td></td>
                          </tr>
                      }
                       
                    </tbody>
                </table>
            </div>
        </div>
                </div>
            </div>
        </section>


    );











};

export default AdminServiceList;
