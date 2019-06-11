import React, { Component } from 'react';

class User extends Component {

  render () {


    let list = [
        { name: "Samerson", email: "samerson@g.com"},
        { name: "Jack", email: "jack@g.com"},
        { name: "Sandy", email: "sandy@g.com"},
        { name: "Willian", email: "will@g.com"},
        { name: "Adriano", email: "ari@g.com"},
        { name: "Nicolly", email: "nic@g.com"}
    ];

    return( 
    <div className="User">
       <table border="1" style={{marginBottom: '1em'}}>
           <tr>
               <th style={{padding: '0.9em'}}>Nome</th>
               <th style={{padding: '0.9em'}}>Email</th>
           </tr>
           {list.map((item) => {
               return <tr>
                        <td style={{padding: '0.9em'}}>
                            {item.name}
                        </td>
                        <td style={{padding: '0.9em'}}>
                            {item.email}
                        </td>
                    </tr>
           })}
       </table>
    </div>
    );

  }

}

export default User;