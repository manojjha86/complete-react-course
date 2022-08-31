import React from "react";
import './UserDetails.css';

function UserDetails(props){
    function onEditUserClicked(event, user){
      props.onEditUser(user);
    }

    function onDeleteUserClicked(event, user){
      props.onDeleteUser(user);
    }
    return <div className="user-details"> 
        <table className="users-table">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th>Country</th>
            <th>City</th>
            <th></th>
          </tr>
          {props.users.map((user) => {
            return <tr>
                      <td>{user.firstName + " " + user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.dob}</td>
                      <td>{user.gender}</td>
                      <td>{user.country}</td>
                      <td>{user.city}</td>
                      <td>
                          <button className="btn btn-primary" onClick={(event) => {onEditUserClicked(event, user)}}>Edit</button>
                          <button className="btn btn-danger" onClick={(event) => {onDeleteUserClicked(event, user)}}>Delete </button>
                      </td>
                    </tr>
          })}
          
        </table>
    </div>
}

export default UserDetails;