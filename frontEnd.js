
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
                for (var i = 0; i < response.data.length; i++){
                   rowDiv = document.createElement("div");
                   rowDiv.id = "content" + i;
                   if (type === "articles") {rowDiv.innerHTML = "<p> <h3>"+response.data[i].metadata.headline+"</h3></p><p> "+response.data[i].metadata.subHeadline+"</p>";
                    }
               else {
                   rowDiv.innerHTML = "<p> <h3>"+response.data[i].metadata.name+"</h3></p><p> "+response.data[i].metadata.description+"</p>";
                    }
                document.getElementById("table").appendChild(rowDiv);
            }
        }
    });
}
