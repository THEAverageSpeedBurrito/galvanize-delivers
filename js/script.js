'use strict';
$(document).ready(function(){
  $('#subtotal').text(0);
  $('#tax').text(0);
  $('#total').text(0);
});

function addToOrder (name, price) {
  var reciept = document.getElementById('reciept');

  var row = document.createElement('tr');

  var nameEntry = document.createElement('td');
  nameEntry.textContent = name;
  row.appendChild(nameEntry);

  var priceEntry = document.createElement('td');
  priceEntry.textContent = price;
  row.appendChild(priceEntry);
  tallySubtotal(price);
  calculateTax();
  calculateTotal();

  reciept.appendChild(row);
}

function tallySubtotal (price) {
  var subtotal = $('#subtotal').text();
  var newSub = parseFloat(subtotal) + price;
  $('#subtotal').text(newSub);
}

function calculateTax () {
  var subtotal = $('#subtotal').text();
  subtotal = parseFloat(subtotal) * 0.08;
  $('#tax').text(Math.round(subtotal * 100) / 100);
}

function calculateTotal () {
  var subtotal = parseFloat($('#subtotal').text());
  var tax = parseFloat($('#tax').text());
  $('#total').text(Math.round((subtotal + tax) * 100) / 100);
}

//Form Checking

function submitOrder () {
  var name = $('#name').val();
  var phone = $('#phone').val();
  var address = $('#address').val();
  var total = $('#total').text();;

  if(name !== '' && phone !== '' && address !== '' && total !== '0') {
    alert('Good Job filling out the form');
  }else{
    alert('Please complete the form');
  }
}
