

fetch("/usuarios/dashboard", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})

    .then(function (resposta) {
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));





                const labels = [
                    'Muralha da China',
                    'Coliseu',
                    'Cristo Redentor',
                    'Machu Pichu',
                    'Chichén Itzá',
                    'Petra',
                    'Taj Mahal',

                ];

                const data = {
                    labels: labels,
                    datasets: [{
                        label: 'Porcentagem de votos',
                        borderColor: 'white',
                        backgroundColor: [
                            ' rgb(61, 96, 37)',
                            'rgba(88, 13, 13, 0.638)',
                            'rgb(21, 146, 195)',
                            'rgb(96, 94, 94)',
                            'burlywood',
                            'rgb(209, 128, 78)',
                            'yellow'

                        ],
                        data: [20, 30, 40, 50, 60, 70, 80],
                    }

                    ]
                };



                const config = {
                    type: 'polarArea',
                    data: data,
                    options: {}
                };






                const myChart = new Chart(
                    document.getElementById('myChart'),
                    config
                );




            })


        }
    }
    )

