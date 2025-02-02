import style from './HomePage.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Catalog } from '../../components/CatalogComponent/Catalog'
import { Accordeon } from '../../components/AccordeonComponent/Accordeon';


export function HomePage() {
    return (
        <>
            <div className='container'>
                <h2>Наш ассортимент</h2>
            <Accordeon />
                <div className="mt110">
                    <Catalog />
                </div>
            </div>
        </>
    )
}