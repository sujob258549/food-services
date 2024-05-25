import React from 'react';
import Header from '../../HeaderAndfooter/Header';
import menuimage from '../image/menu/banner3.jpg'
import OurmenuBanner from './OurmenuBanner';
import Sheredtitle from '../Components/Sheredtitle';
import useMenu from '../Castomhuk/useMenu';
import Item from '../Components/Item';
import Subbaner from './Subbaner';
import desdartImg from '../image/menu/dessert-bg.jpeg'
import pizzaImg from '../image/menu/pizza-bg.jpg'
import soupImg from '../image/menu/soup-bg.jpg'
import saladImg from '../image/menu/salad-bg.jpg'
import bannerImg from '../image/menu/banner3.jpg'
import Footer from '../../HeaderAndfooter/Footer';
import ItemsMap from './ItemsMap';


const Ourmenu = () => {
    const [menu] = useMenu();
    const offeredProduct = menu.filter(product => product.category === 'offered')
    const dessertProduct = menu.filter(product => product.category === 'dessert')
    const pizzaProduct = menu.filter(product => product.category === 'pizza')
    const soupProduct = menu.filter(product => product.category === 'soup')
    const saladProduct = menu.filter(product => product.category === 'salad')
    const drinksProduct = menu.filter(product => product.category === 'drinks')

    return (
        <div className='mx-auto max-w-[1280px]'>
            <Header></Header>

            {/* offer product */}
            <div>
                <OurmenuBanner img={menuimage} header={'OUR MENU'} paragrap={'would your like to your dist'}></OurmenuBanner>
                <Sheredtitle subhading={"---Don't miss---"} hading={"TODAY'S OFFER"}></Sheredtitle>
                <div className="">
                    <Item item={offeredProduct}></Item>
                </div>
                
            </div>
            {/* dessert */}
            <div>
                <Subbaner img={desdartImg} header={'desserts'} paragrap={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Subbaner>

                <div className="mt-10 md:mt-20">
                  <ItemsMap items={dessertProduct} cetagory={'dessert'}></ItemsMap>
                </div>
                
            </div>
            {/* pizza */}
            <div>
                <Subbaner img={pizzaImg} header={'pizza'} paragrap={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Subbaner>

                <div className="mt-10 md:mt-20">
                    <ItemsMap items={pizzaProduct} cetagory={'pizza'}></ItemsMap>
                </div>
                
            </div>
            {/* salads */}
            <div>
                <Subbaner img={saladImg} header={'salads'} paragrap={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Subbaner>

                <div className="mt-10 md:mt-20">
                    <ItemsMap items={saladProduct} cetagory={'salad'}></ItemsMap>
                </div>
                
            </div>
            {/* soups */}
            <div>
                <Subbaner img={soupImg} header={'soups'} paragrap={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Subbaner>

                <div className="mt-10 md:mt-20">
                    <ItemsMap items={soupProduct} cetagory={'soup'}></ItemsMap>
                </div>
                
            </div>
            {/* drink */}
            <div>
                <Subbaner img={desdartImg} header={'drink'} paragrap={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Subbaner>

                <div className="mt-10 md:mt-20">
                    <ItemsMap items={drinksProduct} catagory={"drinks"}></ItemsMap>
                </div>
                
            </div>
          <Footer></Footer>

        </div>

    );
};

export default Ourmenu;