var index = 0;
var globalType = 'videos';
function startIndex() {
    //for pagination
    index += 10;
    apiCaller(globalType);
}
function firstIndex() {
    //to get back to the top
    index = 0;
    apiCaller(globalType);
}

function apiCaller(type) {

    if (type != globalType){
        index = 0;
        globalType = type;
    }
    var url = 'http://ign-apis.herokuapp.com/' + type + '?startIndex=' + index + '&count=10';
    $.ajax({
        url: url,
        // The name of the callback parameter as specified by the YQL service
        jsonp: "callback",
        //Tell jQuery I'm expection jsonp
        dataType: 'jsonp',
        //Tell YQL what I want
        data: {
            format: 'json'
        },
        success: function(response) {
            var myNode = document.getElementById("divDump");
            while(myNode.lastChild) {
                myNode.removeChild(myNode.lastChild);
            }

            for (var i = 0; i < response.data.length; i++){
                //create div for each and give them class names.
               shownDiv = document.createElement("div");
                   shownDiv.className='shownDiv';
               hiddenDiv = document.createElement("div");
                   hiddenDiv.className='hiddenDiv';
                   hiddenDiv.style.display='none';
               numDiv = document.createElement("div");
                   numDiv.className = 'numDiv';
               titleDiv = document.createElement("div");
                   titleDiv.className = 'titleDiv';
               textDiv = document.createElement("div");
                   textDiv.className = 'textDiv';
               lengthDiv = document.createElement("div");
                   lengthDiv.className = 'lengthDiv';
               ign = document.createElement('div');
                    ign.className = 'IGN';
               title = document.createElement('div');
                    title.className = 'title';
               date = document.createElement('div');
                    date.className = 'date';

               shownDiv.id = "item # " + (i + 1);
                //so I can manipulate div on hover
                $(function() {
                $('.shownDiv').hover(function(){
                    $(this).addClass('hovered');
                },
                function(){
                    $(this).removeClass('hovered');
                });
            });
            //so I can change color and underline on click and hover
               if (type ==='articles') {
                   $(".articleButton").css("background-color", "#cc0000");
                   $(".articleButton").css("color", "white");
                   $(this).css("background-color", "#cc0000");
                   $(function () {
                       $(".articleButton").hover(function() {
                       $(this).addClass('hovered');
                   },
                       function () {
                           $(this).removeClass('hovered');
                       });
                   });
                   $(".videoButton").css("background-color", "white");
                   $(".videoButton").css("color", "#cc0000");
               }
               else {
                   $(".videoButton").css("background-color", "#cc0000");
                   $(".videoButton").css("color", "white");
                   $(this).css("background-color", "#cc0000");
                   $(function () {
                       $(".videoButton").hover(function() {
                       $(this).addClass('hovered');
                   },
                        function () {
                           $(this).removeClass('hovered');
                       });
                   });
                   $(".articleButton").css("background-color", "white");
                   $(".articleButton").css("color", "#cc0000");
               }
               if (type === "articles") {
                   //add correct data to different divs, put them in shownDiv and hiddenDiv
                   titleDiv.append(response.data[i].metadata.headline);
                   var d = response.data[i].metadata.publishDate.slice(0, 10).split('-');
                   date.append(d[1] +'/'+ d[2] +'/'+ d[0]);
                   title.append(response.data[i].metadata.headline);
                   ign.append("GO TO IGN");
                   textDiv.append(response.data[i].metadata.subHeadline);
                   numDiv.append(index+i+1);
                   shownDiv.append(numDiv, titleDiv, textDiv, date);
                   document.getElementById("divDump").appendChild(shownDiv);
                   var img = document.createElement('img');
                   img.src =  response.data[i].thumbnails[1].url;
                   img.className = 'img';
                   //make images backgrounds so they are easier to manipulate
                   $('.img').each(function() {
                      var background = $(this).data('background');
                      $(this).css('background-image', 'url('+background+')');
                    });
                   hiddenDiv.append(img, title, ign);
                       hiddenDiv.id=(i+1);
                   document.getElementById('divDump').appendChild(hiddenDiv);

               }
               else {
                   titleDiv.append(response.data[i].metadata.name);
                   title.append(response.data[i].metadata.name);
                   ign.append("GO TO IGN");
                   textDiv.append(response.data[i].metadata.description);
                   numDiv.append(index+i+1);
                   var minSec = '';
                   //make minute second format for display
                   var m = Math.floor(response.data[i].metadata.duration / 60);
                   var s = Math.floor(response.data[i].metadata.duration % 60);
                   minutes = m.toString();
                   seconds = s.toString();
                   if (seconds.length !== 2) {
                       seconds += '0';
                   }
                   minSec += minutes +":" + seconds;
                   lengthDiv.append(minSec);
                   shownDiv.append(numDiv, titleDiv, lengthDiv, textDiv);

                   document.getElementById("divDump").appendChild(shownDiv);
                   var img = document.createElement('img');
                   img.src =  response.data[i].thumbnails[1].url;
                   img.className = 'img';
                   $('.img').each(function() {
                      var background = $(this).data('background');
                      $(this).css('background-image', 'url('+background+')');
                    });
                   hiddenDiv.append(img, title, ign);
                       document.getElementById('divDump').appendChild(hiddenDiv);
                    }
                }
                    //display hiddenDiv on click of shownDiv and hide on click
                    $(".shownDiv").on("click", function() {
                    $("#divDump .hiddenDiv").css("display", "none");
                    $(this.nextElementSibling).css("display", "unset");
                        $(".hiddenDiv").on("click", function() {
                            $("#divDump .hiddenDiv").css("display", "none");
                            $(this).css("display", "none");
                    ;})
            ;})
        }
    });
}
apiCaller(globalType);
