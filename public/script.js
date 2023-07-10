function sendData(){
    let name=document.getElementById('name').value;
    let phone=document.getElementById('phone').value;
    let email=document.getElementById('email').value;
    let message=document.getElementById('message').value;
    





    let userdata = {
        name,
        phone,
        email,
        message

      }
      fetch('http://localhost:3000/user',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(userdata)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        document.getElementById('root').innerHTML = `${data.message}`
      })
      .catch(err => {
        console.log(err);
      })
      
}




