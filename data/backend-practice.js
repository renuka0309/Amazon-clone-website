const xhr = new XMLHttpRequest();

xhr.addEventListener('load',()=>{
  console.log(xhr.response);
});

xhr.open('GET','https://supersimplebackend.dev');
xhr.send();
xhr.response
/**
 * ---Backend---
 * When two computers are connected to internet, they can send messages to eachother
   using HHTP=HyperText Transfer Protocol.
 * XMLHttpRequest() is built-in class which creates a new HTTP mssg to send to the backend. 
 *   xhr.open('GET','');  in this GET is request type and next parameter is the url of the backend.
 * .send() sends the message across the internet.
 * backend may respond in the form of either plain-text, JSON, HTML, or image.
 */