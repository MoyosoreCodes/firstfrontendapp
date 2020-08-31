import React, { Component } from 'react'
import { ProSidebar,Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Side.css'

class Side extends Component {

    
    render() {
        return (
            <ProSidebar>
                <SidebarHeader >
                    <div> 
                        <i className="far fa-user"></i>
                        Profile
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem >Dashboard</MenuItem>
                        <SubMenu title ="REQUESTS">
                            <MenuItem>Make Request</MenuItem>
                            <MenuItem>Request Status</MenuItem>
                            <MenuItem>Feedback</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter>
                    <Menu>
                        <SubMenu title = "Settings">
                            <MenuItem> Preference</MenuItem>
                            <MenuItem> Log out</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        )
    }
}

export default Side
