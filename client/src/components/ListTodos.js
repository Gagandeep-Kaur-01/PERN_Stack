import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
    return (
        <Fragment>
          {" "}
          <table className="table mt-5 text-center">
           <thead>
            <tr>
              <th>Description</th>
             <th>Edit</th>
             <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                <td>.......</td>
                <td>button</td>
                <td>button</td>
                </tr>    
            */}
              
          </tbody>
         </table>
      </Fragment>
    )
};

export default ListTodos;