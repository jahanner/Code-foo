

function apiCaller(type) {
    var url = 'http://ign-apis.herokuapp.com/' + type + '?startIndex=0&count=10';
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
                   hiddenDiv.style.visibility='hidden';
               numDiv = document.createElement("div");
               titleDiv = document.createElement("div");
               textDiv = document.createElement("div");
               dateDiv = document.createElement("div");
               lengthDiv = document.createElement("div");

               shownDiv.id = "item # " + (i + 1);

               if (type === "articles") {
                   titleDiv.append(response.data[i].metadata.headline);
                       textDiv.append(response.data[i].metadata.subHeadline);
                       dateDiv.append(response.data[i].metadata.publishDate);
                       numDiv.append(i+1);
                       shownDiv.append(numDiv, titleDiv, textDiv, dateDiv)
                       document.getElementById("divDump").appendChild(shownDiv);
                   hiddenDiv.append('<img src="'+ response.data[i].thumbnails[0].url + '" />');
                       hiddenDiv.id=(i+1);

                //    hiddenDiv.css({'background-image' : 'url('+response.data[i].thumbnails[0].url+')','background-repeat': 'no-repeat'});
                       document.getElementById('divDump').appendChild(hiddenDiv);

               }
               else {
                   titleDiv.append(response.data[i].metadata.name);
                       textDiv.append(response.data[i].metadata.description);
                       dateDiv.append(response.data[i].metadata.publishDate);
                       numDiv.append(i+1);
                       lengthDiv.append(response.data[i].metadata.duration);
                       shownDiv.append(numDiv, titleDiv, textDiv, dateDiv, lengthDiv)
                       document.getElementById("divDump").appendChild(shownDiv);
                   hiddenDiv.append('<img src="'+ response.data[i].thumbnails[0].url + '" />');
                       document.getElementById('divDump').appendChild(hiddenDiv);
                    }
                    document.getElementByClassName("shownDiv").addEventListener("click", function() {
                    console.log("hello", this);})

            }
        }
    });
}
