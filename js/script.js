'use strict';
$(document).ready(function(){
  $('#subtotal').text('$0.00');
  $('#tax').text('$0.00');
  $('#total').text('$0.00');
});

function addToOrder (name, price) {
  var reciept = document.getElementById('reciept');

  var row = document.createElement('tr');

  var nameEntry = document.createElement('td');
  nameEntry.textContent = name;
  row.appendChild(nameEntry);

  var priceEntry = document.createElement('td');
  $(priceEntry).text(price);
  $(row).append(priceEntry);
  tallySubtotal(price);
  calculateTax();
  calculateTotal();

  reciept.appendChild(row);
}

function tallySubtotal (price) {
  var subtotal = $('#subtotal').text();
  var newSub = parseFloat(subtotal.substring(1)) + price;
  $('#subtotal').text('$' + newSub.toFixed(2));
}

function calculateTax () {
  var subtotal = $('#subtotal').text().substring(1);
  subtotal = parseFloat(subtotal) * 0.08;
  $('#tax').text('$' + subtotal.toFixed(2));
}

function calculateTotal () {
  var subtotal = parseFloat($('#subtotal').text().substring(1));
  var tax = parseFloat($('#tax').text().substring(1));
  $('#total').text('$' + (subtotal + tax));
}

//Form Checking

function submitOrder () {
  var name = $('#name').val();
  var phone = $('#phone').val();
  var address = $('#address').val();
  var total = $('#total').text();

  if(name !== '' && phone !== '' && address !== '' && total !== '0') {
    alert('Good Job filling out the form');
  }else{
    alert('Please complete the form');
  }
}
