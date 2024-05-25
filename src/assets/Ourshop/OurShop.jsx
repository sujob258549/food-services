// import { TabList } from "react-tabs";
import Header from "../../HeaderAndfooter/Header";
import OurmenuBanner from "../Ourmenu/OurmenuBanner";
import ourShopimg from '../image/shop/banner2.jpg'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import useMenu from "../Castomhuk/useMenu";
import OurShopMap from './OurShopMap';



const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);
    const [menu] = useMenu()
    const dessertProduct = menu.filter(product => product.category === 'dessert')
    const pizzaProduct = menu.filter(product => product.category === 'pizza')
    const soupProduct = menu.filter(product => product.category === 'soup')
    const saladProduct = menu.filter(product => product.category === 'salad')
    const drinksProduct = menu.filter(product => product.category === 'drinks')
    return (
        <div className='mx-auto max-w-[1280px]'>
            <Header></Header>
            <OurmenuBanner img={ourShopimg} header={'our Shopimg'} paragrap={'world you like to our shop'}></OurmenuBanner>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-center space-x-4 mt-4 cursor-pointer">
                    <Tab className={`text-xl font-medium ${tabIndex === 0 ? 'border-b-4 border-yellow-500 text-yellow-400' : ''}`}>
                        Salad
                    </Tab>
                    <Tab className={`text-xl font-medium ${tabIndex === 1 ? 'border-b-4 text-yellow-400 border-yellow-500' : ''}`}>pizza</Tab>
                    <Tab className={`text-xl font-medium ${tabIndex === 2 ? 'border-b-4 border-yellow-500 text-yellow-400' : ''}`}>soups</Tab>
                    <Tab className={`text-xl font-medium ${tabIndex === 3? 'border-b-4 border-yellow-500 text-yellow-400' : ''}`}>desserts</Tab>
                    <Tab className={`text-xl font-medium ${tabIndex === 4 ? 'border-b-4 border-yellow-500 text-yellow-400' : ''}`}>drinks</Tab>

                </TabList>
                <TabPanel>
                    <OurShopMap products={saladProduct} producthading={'Salad'}></OurShopMap>
                </TabPanel>
                <TabPanel>
                    <OurShopMap products={pizzaProduct} producthading={'pizza'}></OurShopMap>
                </TabPanel>
                <TabPanel>
                    <OurShopMap products={soupProduct} producthading={"soup"}></OurShopMap>
                </TabPanel>
                <TabPanel>
                    <OurShopMap products={dessertProduct} producthading={"desserts"}></OurShopMap>
                </TabPanel>
                <TabPanel>
                    <OurShopMap products={drinksProduct} producthading={"drink"}></OurShopMap>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default OurShop;