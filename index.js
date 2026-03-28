const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
        id: 1,
        name: "Pc gamer black",
        price: new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(2000.00),
        inStock: 10,
    },
    {
        id: 2,
        name: "Mouse dragon",
        price: new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(10),
        inStock: 5,
    },
    {
        id: 3,
        name: "Teclado Mecanico logiTech",
        price: new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(90),
        inStock: 20,
    }
]

app.get('/', (req, res) => {
    res.render('home', { products })
})

app.get('/product/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const product = products.find((p) => p.id == id)

    res.render('product', { product })
})

app.listen(3000, () => {
    console.log('Server starting...')
})