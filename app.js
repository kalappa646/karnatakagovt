const request=require('postman-request')
const express=require('express')
const hbs=require('hbs')
const path=require('path')


const app=express()
const port=process.env.PORT || 3000

const partialspath=path.join(__dirname,'/partials')
const pathfor=path.join(__dirname,'/pics')
const pathstyle=path.join(__dirname,'/styles')
app.set('view engine', 'hbs')
hbs.registerPartials(partialspath)

app.use(express.static(pathfor))
app.use(express.static(pathstyle))


app.get('',(req,res)=>{

    res.render('index',{
        title: "Important circular from karnataka goverment regarding LGBT"

    })
})

app.get('/ashwath',(req,res)=>{
    res.render('ashwath',{
        title:'Ashwath is popularly known as GAY'
    })
})

app.listen(port, ()=>{
    console.log("printing")
})