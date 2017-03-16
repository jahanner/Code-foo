var index = 0;
var globalType = 'videos';
function startIndex() {
    index += 10;
    apiCaller(globalType);
}

function apiCaller(type) {
    // if (pagination) {
    //     $("#pagination").on("click", function() {
    //     index = startIndex(type);
    // })}
    // else {
    //     index = 0;
    // }
    if (type != globalType){
        index = 0;
        globalType = type;
    }
    var url = 'http://ign-apis.herokuapp.com/' + type + '?startIndex=' + index + '&count=10';
    $.ajax({
        url: url,
        // The name of the callback parameter as specified by the YQL service
        jsonp: "callback",
        //Tell jQuery we're expection jsonp
        dataType: 'jsonp',
        //Tell YQL what we want and that we want JSON
        data: {
            format: 'json'
        },
        success: function(response) {
            var myNode = document.getElementById("divDump");
            while(myNode.lastChild) {
                myNode.removeChild(myNode.lastChild);
            }
            //
            for (var i = 0; i < response.data.length; i++){
               shownDiv = document.createElement("div");
                   shownDiv.className='shownDiv';
               hiddenDiv = document.createElement("div");
                   hiddenDiv.className='hiddenDiv';
                   hiddenDiv.style.display='none';
               numDiv = document.createElement("div");
               titleDiv = document.createElement("div");
               textDiv = document.createElement("div");
            //    dateDiv = document.createElement("div");
               lengthDiv = document.createElement("div");

               shownDiv.id = "item # " + (i + 1);

               if (type === "articles") {
                   titleDiv.append(response.data[i].metadata.headline);
                       textDiv.append(response.data[i].metadata.subHeadline);
                       numDiv.append(index+i+1);
                       shownDiv.append(numDiv, titleDiv, textDiv)
                       document.getElementById("divDump").appendChild(shownDiv);
                       var img = document.createElement('img');
                       img.src =  response.data[i].thumbnails[0].url;
                   hiddenDiv.append(img);
                       hiddenDiv.id=(i+1);
                       document.getElementById('divDump').appendChild(hiddenDiv);

               }
               else {
                   titleDiv.append(response.data[i].metadata.name);
                       textDiv.append(response.data[i].metadata.description);
                    //    dateDiv.append(response.data[i].metadata.publishDate);
                       numDiv.append(index+i+1);
                       minSec = '';
                       minutes = response.data[i].metadata.duration / 60;
                       seconds = response.data[i].metadata.duration % 60;
                       

                       lengthDiv.append(response.data[i].metadata.duration);
                       shownDiv.append(numDiv, titleDiv, textDiv, lengthDiv);
                       document.getElementById("divDump").appendChild(shownDiv);
                       var img = document.createElement('img');
                       img.src =  response.data[i].thumbnails[0].url;
                   hiddenDiv.append(img);
                       document.getElementById('divDump').appendChild(hiddenDiv);
                    }
                }
                    $(".shownDiv").on("click", function() {
                    $("#divDump .hiddenDiv").css("display", "none");
                    $(this.nextElementSibling).css("display", "unset");

            ;})
        }
    });
}
