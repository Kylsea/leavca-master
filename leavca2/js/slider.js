var $rangeslider = $('#js-amount-range');
var $amount = $('#js-amount-input');

$rangeslider
  .rangeslider({
    polyfill: false
  })
  .on('input', function() {
    $amount[0].value = this.value;
  });

$amount.on('input', function() {
  $rangeslider.val(this.value).change();
});