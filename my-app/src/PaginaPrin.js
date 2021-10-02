import './App.css'
import CarouselImage from './Caruosel';
import Contactos from './Contactos';
import Texto from './TextoBienvenida';
import CardDic from './Card';
import { Grid } from '@material-ui/core';

export default function PaginaPri(){
    return(
        <div>
        <header className="App-header">
        </header>
        <body className= "app-body">
          <Texto className = "texto"/>
          <CarouselImage className="Carrucel"></CarouselImage>
          <Grid container spacing = {6}>
            <Grid item xs={12} sm={6} md = {4}>
              <CardDic name="Oficinas en Japon" where = 'Japon Tokio' detalles = 'Las oficinas se encuentras en del otro lado del mundo' url = '"https://www.nintenderos.com/wp-content/uploads/2014/06/nintendo-building.jpg"' ></CardDic>
            </Grid>
            <Grid item xs={12} sm={6} md = {4}>
              <CardDic name="Oficinas en USA" where = 'Silicon Valley ' detalles = 'Las oficinas se encuentran en USA por lo popular que es la empresa' url = 'https://cdn.aarp.net/content/dam/aarp/tourism/national/2017/11/1140-space-needle-incomparable-buildings-america-esp.imgcache.rev75d4d1117dcaa1aa0e00614a41f8c70e.jpg'></CardDic>
            </Grid>
            <Grid item xs={12} sm={6} md = {4}>
            <CardDic name="Oficinas en USA" where = 'Silicon Valley ' detalles = 'Las oficinas se encuentran en México, el lugar donde nacio' url = 'https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2020/02/04113847/290120_Edificios-1280x620.jpg'></CardDic>
            </Grid>
          </Grid>


          {/* <Toolbar className = "toolbar">
            <CardDic></CardDic>
            <CardDic></CardDic>
          </Toolbar> */}
        </body> 
        <footer >
        </footer>
        </div>
    );

}