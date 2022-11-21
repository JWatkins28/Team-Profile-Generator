// FUNCTION FOR GENERATING THE FINAL HTML
const generateHTML = (cards) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
        </style> 
    </head>
    <body class="bg-light">
        <header id="top-header" class="bg-dark text-white"><h1>My Team</h1></header>
    
        <main>
            <div id="container-for-cards" class="row row-cols-2 row-cols-md-2 g-4">
                <!-- Cards go here -->
                ${getCards(cards)}
                <!-- Cards end here -->
            </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>    
    </body>
    </html>`
}

// ITERATES THROUGH THE CARDS ARRAY AND PUTS THEM ALL TOGETHER
const getCards = (array) => {
    let content = ""
    for (const item of array) {
        content += item;
    }
    return content;
}

module.exports = {generateHTML};