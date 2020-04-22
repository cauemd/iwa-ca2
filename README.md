# iwa-ca2
Interactive Web Application project, based on node.js, mongo-db and Heroku

<p> This project was made as a way to learn how to build and make calls to an API hosted in a node.js server. It includes a 
Mongodb database being used for storage. The system is also hosted in the cloud using Heroku. Full CRUD functionalities were implemented</p>

<hr/>
<div>
    <h3>API Description</h3>
    <table>
        <th>
            <td>Route</td>
            <td>Expected parameters</td>
            <td>What it does</td>
        </th>
        <tr>
            <td>1</td>
            <td><code>/monsters</td>
            <td>
                <ul>
                   <li>GET:
                        <ul>
                            <li>Required: :None</li>
                            <li>Optional: name</li>
                        </ul>
                    </li>
                    <li>Post:
                        <ul>
                            <li>Required: None</li>
                        </ul>
                    </li>
                    <li>Put:
                        <ul>
                            <li>Required: name</li>
                        </ul>
                    </li>
                    <li>Delete:
                        <ul>
                            <li>Required: name</li>
                        </ul>
                    </li>
                </ul>
            </td>
            <td>
                <ul>
                   <li>GET: Get a list with the information of all monsters in the database. If name is passed, get the information of that specific monster.</li>
                   <li>POST: Adds a new monster to the database. The request must send a stringfied json with valid values for {"name", "size", "type"}. It's advisable only to use this routing through the front-end.</li>
                   <li>PUT: Updates the data of an existing monster in the database. The name of the monster that will be updated must be passed, while the new values must be in the body of the request. It's advisable only to use this routing through the front-end</li>
                   <li>DELETE: Removes a monster from the database. The name of the monster must be passed./li>
                </ul>
            </td>
        </tr>
