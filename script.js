function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "remyoreo11@gmail.com",
    Password: "7BD07DECEE9BB408E4E9F35E03BE36E8486F",
    To: "remyoreo11@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      " <br> Email: " +
      document.getElementById("email").value +
      " <br> Phone no: " +
      document.getElementById("phone").value +
      " <br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message"));
}
