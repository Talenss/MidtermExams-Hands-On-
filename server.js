const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false});


const dishes = [
    {
        type: 'Sisig',
        province: 'Pampanga',
        price: 220,
    },
    {
        type: 'Salpicao',
        province: 'Quezon',
        price: 180,
    },
    {
        type: 'Bagnet',
        province: 'Ilocos',
        price: 370,
    },
    {
        type: 'Pancit Canton',
        province: 'Lucky Me',
        price: 30,
    },
    
];


app.get('/dishes', (req, res) => {
    res.status(200).send(dishes);
})



app.get('/dishes/:type', (req, res) => {
    const dishToFind = req.params.type;
    const dish = dishes.find(d => d.type === dishToFind)
    if (dish)
        {
            res.status(200).send(dish);
        }
    else
    {
        res.status(404).send('Dish not Found');
    }
});


app.use((req, res) => {
    res.status(404).send('Record Not Found');
});


app.listen(3000, () => {
    console.log('App is listening at port 3000.');
});

