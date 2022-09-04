const input = document.getElementById('input')
const search = document.getElementById('search')
const form = document.getElementById('form')
const error = document.getElementById('error')
const show_all =document.getElementById('show_all')


 

    


search.addEventListener('click', e =>{
    e.preventDefault();
    
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' +input.value)
    .then(response => response.json())
    .then(converteddata =>{
    
        let output = ""
        for(i = 0; i < converteddata.length; i++){
            output += `
            <div id"meaning">Meaning:- ${converteddata[0].meanings[i].definitions[0].definition}</div>
           Example:- ${converteddata[0].meanings[i].definitions[0].example}</div>
           <div id="phonetics">Phonetics:- ${converteddata[0].phonetic}</div>
           <div id="audio">Audio:- ${converteddata[0].phonetics[0].audio}</div>
           <div id="partofspeech">part-of-Speech:- ${converteddata[0].meanings[i].partOfSpeech}</div>      
           `
           if($converteddata[0].meanings[i].definitions[0].example == 'undefine'){
            alert(hello)
        }
        }
        show_all.innerHTML = output;
    })
    })
    
    

    

