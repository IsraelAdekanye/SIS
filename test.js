const result = [
      {
        "id": "1",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@gmail.com",
        "age": 34,
        "companyId": "1"
      },
      {
        "id": "2",
        "firstName": "Mark",
        "lastName": "Williams",
        "email": "mark@gmail.com",
        "age": 33,
        "companyId": "1"
      },
      {
        "id": "3",
        "firstName": "Sara",
        "lastName": "Smith",
        "email": "sara@gmail.com",
        "age": 23,
        "companyId": "2"
      },
      {
        "firstName": "Brad",
        "lastName": "Traversy",
        "age": 35,
        "email": "test@test.com",
        "companyId": "3",
        "id": "B1Ww3BIS-"
      }
]

result.forEach((e)=>{
    <tr>
        <td>e.id</td>
        <td>e.firstName</td>
        <td>e.lastName</td>
        <td>e.age</td>

    </tr>
})
