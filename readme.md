## Welcome! :D 
This is a small practice for RESTAPI using Node.js, Express.js and MongoDB
## About it
In order for this small API to work you need to create a .env file and fill it with:
<br>DATABASE_URL = Yourmongodbdatabaseurl <-- Here

<br>The proyect will always run on localhost:3000

<br><h2>Endpoints</h2>
<b>GET:</b> localhost:3000/contacts/
<br>Returns all contacts
<br><br>
<b>GET:</b> localhost:3000/contacts/id
<br>Returns specific contact by id
<br><br><b>POST:</b> localhost:3000/contacts/
<br>Creates a user, the JSON request needs to be in this format
<pre>
    name: String(Change it to the name)
    contactNumber: int(Change it to the contact number)
    contactDate: Date(You can add a specific date or the system will use the current date as default)</pre>
<br><b>PATCH:</b> localhost:3000/contacts/id
<br>Allows to change info of a user, the JSON request needs to be in this format (You can change only one field if you want to)
<pre>
    name: String(Change it to the new name)
    contactNumber: int(Change it to the contact new number)
    contactDate: Date(You can add a specific date )</pre>
<br><b>DELETE:</b> localhost:3000/contacts/id
<br>Deletes a specific user by id