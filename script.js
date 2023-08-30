async function getmatchdata() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=49f8e959-792f-4f0d-a60f-17a9c200ebef&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success") return;
            const listmatches = data.data;

            if (!listmatches) return [];

            const result = listmatches.map(match => `${match.name}, ${match.status}`);

            document.getElementById("matches").innerHTML = result.map(match => `<li>${match} </li>`).join('');
            return result;



        })
        .catch(e => console.log(e));



}
getmatchdata();