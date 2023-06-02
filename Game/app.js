function check(){
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: '10.2.3.53',
    user: 'thomasg',
    password: 'Thomas',
  });

  connection.connect((error) => {
    if(error){
      console.log('Error connecting to the MySQL Database');
      return;
    }
    console.log('Connection established sucessfully');
  });
  connection.end((error) => {
  });
}
check()