

fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json%27)
            .then((response) => response.json())
            .then((jsonData) => {
                jsonData.forEach(function(obj){
                console.log(obj.name)
