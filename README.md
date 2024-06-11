# 📝 **Todo List Web Application**

We're embarking on an intriguing project—a Todo-list Web Application crafted with NodeJS, Express, React, MySQL, GraphQL, Apollo-Client, and Sequelize ORM. The application will empower users to seamlessly Add, Update, Delete, and Strikethrough tasks, with all data securely stored in MySQL.

Navigation Menu

📝 Code 🐛 Issues 🔄 Pull requests
BreadcrumbsTodoList_GraphQL-
/README.md
Latest commit
🌟 gouravpandey009
🚀 gouravpandey009
now
History
📜 176 lines (161 loc) · 2.51 KB
File metadata and controls

👀 Preview

👨‍💻 Code

🔍 Blame
Todo List Web Application
🚀 Embark on an exciting journey with our Todo-list Web Application, powered by NodeJS, Express, React, MySQL, GraphQL, Apollo-Client, and Sequelize ORM. This app enables users to effortlessly Add, Update, Delete, and Strikethrough tasks, with all data securely stored in MySQL.

🛠️ Install Todo list Server files

```bash
cd server/
npm install -g nodemon
npm install
nodemon server.js
```

🛠️ Install Todo list

```bash
cd todolist/
npm install
npm start
```

🔧 Environment Variables
To run this project, add the following environment variables to your .env file

```bash
PROXY_PORT=4000
```

📝 Usage/Examples

🚀 To use GraphiQL Developer Tool

🔗 [http://localhost:[Port]/graphql](http://localhost:[Port]/graphql)

🔍 For getting all Data from tododb database

```graphql
query{
  msglist{
    id,
    jobtodo,
    toggle
  }
}
```

🔍 Get data of a single ID

```graphql
query{
  msgDetail(id:1){
    id,
    jobtodo,
    toggle
  }
}
```

🔍 Get data of a single ID by passing ID as a query variable in JSON format

```graphql
query($msgid:Int){
  msgDetail(id:$msgid){
    id,
    jobtodo,
    toggle
  }
}
```

📌 Passing ID as a query variable in JSON format

```json
{
    "msgid": 1
}
```

🚀 To Create/Add Data

```graphql
mutation{
  msgCreate(jobtodo:"1st Data Added"){
	jobtodo
  }
}
```

🚀 To Create using a query variable

```graphql
mutation msgCreate($jobtodo: String!){
  msgCreate(jobtodo:$jobtodo){
    id,
    jobtodo
  }
}
```

📌 Pass query variable

```json
{
	jobtodo:"New Msg Added"
}
```

🚀 To Update Data and show some message when the data is Updated

```graphql
mutation{
  msgUpdate(id:1, jobtodo:"1st Data Updated Modified"){
    toggle,
    message,
    error
  }
}
```

🚀 To Update using a query variable

```graphql
mutation msgUpdate($id: Int!, $jobtodo: String!){
  msgUpdate(id:$id, jobtodo:$jobtodo){
    toggle,
    message,
    error
  }
}
```

📌 Pass query variable

```json
{
  "id": 3,
  "jobtodo": "3rd data Updated now"
}
```

🚀 To Delete Data on provided ID and show StatusType, some message, etc.

```graphql
mutation{
  msgDelete(id:2){
    toggle,
    message,
    error
  }
}
```

🚀 To Delete using a query variable

```graphql
mutation msgDelete($id: Int!){
  msgDelete(id:$id){
    toggle,
    message
  }
}
```

📌 Pass query variable

```json
{
id: 21
}
```

🚀 Get Toggle Data and show some message when data is Updated

```graphql
mutation{
  msgToggle(id:1, toggle: 1){
    toggle,
    message,
    error
  }
}
```

🚀 To Toggle Update using a query variable

```graphql
mutation msgToggle($id: Int!, $toggle: Int!){
  msgToggle(id:$id, toggle:$toggle){
    id,
    toggle
  }
}
```

📌 Pass query variable

```json
{
  "id": 1,
  "toggle": 1
}
```

This project is a blend of innovation and functionality, promising a seamless experience for all users! 🚀
