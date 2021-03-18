import React from 'react'
import './PropertyListing.css';

import WalnutFront from './images/walnut/walnut_front.jpg';
import WalnutKitchen1 from './images/walnut/kitchen1.jpg';
import WalnutKitchen2 from './images/walnut/kitchen2.jpg';
import WalnutKitchen3 from './images/walnut/kitchen3.jpg';
import WalnutLiving1 from './images/walnut/living1.jpg';
import WalnutLiving2 from './images/walnut/living2.jpg';
import WalnutLiving3 from './images/walnut/living3.jpg';
import WalnutDining from './images/walnut/dining.jpg';
import WalnutMasterBedroom1 from './images/walnut/master_bed1.jpg';
import WalnutMasterBedroom2 from './images/walnut/master_bed2.jpg';
import WalnutMasterBedroom3 from './images/walnut/master_bed3.jpg';
import WalnutSmallBedroom1 from './images/walnut/small_bed1.jpg';
import WalnutSmallBedroom2 from './images/walnut/small_bed2.jpg';
import WalnutBathroom1 from './images/walnut/walnut_bathroom1.jpg';
import WalnutBathroom2 from './images/walnut/walnut_bathroom2.jpg';
import WalnutLaundry from './images/walnut/walnut_laundry.jpg';
import WalnutInternet from './images/walnut/walnut_internet.jpg';
import WalnutBackyard from './images/walnut/walnut_backyard.jpg';
import VineFront from './images/vine/vine_front.jpg';


import VineKitchen1 from './images/vine/vine_kitchen1.jpg';
import VineKitchen2 from './images/vine/vine_kitchen2.jpg';
import VineLiving1 from './images/vine/vine_living1.jpg';
import VineLiving2 from './images/vine/vine_living2.jpg';
import VineLiving3 from './images/vine/vine_living3.jpg';
import VineMaster1 from './images/vine/vine_master1.jpg';
import VineMaster2 from './images/vine/vine_master2.jpg';
import VineMaster3 from './images/vine/vine_master3.jpg';
import VineTwin1 from './images/vine/vine_twin1.jpg';
import VineTwin2 from './images/vine/vine_twin2.jpg';
import VineQueen1 from './images/vine/vine_queen1.jpg';
import VineQueen2 from './images/vine/vine_queen2.jpg';
import VineQueen3 from './images/vine/vine_queen3.jpg';
import VineClosets from './images/vine/vine_closets.jpg';
import VineBathroom1 from './images/vine/vine_bathroom1.jpg';
import VineBathroom2 from './images/vine/vine_bathroom2.jpg';
import VineBathroom3 from './images/vine/vine_bathroom3.jpg';
import VineBathroom4 from './images/vine/vine_bathroom4.jpg';
import VineBathroom5 from './images/vine/vine_bathroom5.jpg';
import VineFrontLock from './images/vine/vine_front_lock.jpg';
import VineLocks from './images/vine/vine_locks.jpg';
import VineCamera from './images/vine/vine_camera.jpg';

import EffLiving1 from './images/efficiency/eff_living1.jpg';
import EffLiving2 from './images/efficiency/eff_living2.jpg';
import EffLiving3 from './images/efficiency/eff_living3.jpg';
import EffLoft from './images/efficiency/eff_loft.jpg';
import EffBathroom from './images/efficiency/eff_bathroom.jpg';
import EffKitchen from './images/efficiency/eff_kitchen.jpg';
import EffFridge from './images/efficiency/eff_fridge.jpg';
import EffWasher from './images/efficiency/eff_washer.jpg';

import Front39 from './images/39/front_39.jpg';
import Head39 from './images/39/head_39.jpg'

import Living139 from './images/39/living1_39.jpg';
import Living239 from './images/39/living2_39.jpg';
import Living339 from './images/39/living3_39.jpg';
import Dining39 from './images/39/dining_39.jpg';
import Washer39 from './images/39/washer_39.jpg';
import Kitchen139 from './images/39/kitchen1_39.jpg';
import Kitchen239 from './images/39/kitchen2_39.jpg';
import Kitchen339 from './images/39/kitchen3_39.jpg';
import Queen139 from './images/39/queen1_39.jpg';
import Queen239 from './images/39/queen2_39.jpg';
import Queen339 from './images/39/queen3_39.jpg';
import King139 from './images/39/king1_39.jpg';
import King239 from './images/39/king2_39.jpg';
import Twin139 from './images/39/twin1_39.jpg';
import Twin239 from './images/39/twin2_39.jpg';
import Bathroom139 from './images/39/bathroom1_39.jpg';
import Bathroom239 from './images/39/bathroom2_39.jpg';
import Porch39 from './images/39/porch_39.jpg';
import Backyard39 from './images/39/backyard_39.jpg';
import Bathroom339 from './images/39/bathroom3_39.jpg';



function PropertyListing() {
    return (
        <div>
            <h2>Walnut Street</h2>

            <h3><img className="walnut_front" src={ WalnutFront } /></h3>
            <h3><img className="kitchen1" src={ WalnutKitchen1 } /></h3>
            <h3><img className="kitchen2" src={ WalnutKitchen2 } /></h3>
            <h3><img className="kitchen3" src={ WalnutKitchen3 } /></h3>
            <h3><img className="living1" src={ WalnutLiving1 } /></h3>
            <h3><img className="living2" src={ WalnutLiving2 } /></h3>
            <h3><img className="living3" src={ WalnutLiving3 } /></h3>
            <h3><img className="dining" src={ WalnutDining } /></h3>
            <h3><img className="master_bed1" src={ WalnutMasterBedroom1 } /></h3>
            <h3><img className="master_bed2" src={ WalnutMasterBedroom2 } /></h3>
            <h3><img className="master_bed3" src={ WalnutMasterBedroom3 } /></h3>
            <h3><img className="small_bed1" src={ WalnutSmallBedroom1 } /></h3>
            <h3><img className="small_bed2" src={ WalnutSmallBedroom2 } /></h3>
            <h3><img className="walnut_bathroom1" src={ WalnutBathroom1 } /></h3>
            <h3><img className="walnut_bathroom2" src={ WalnutBathroom2 } /></h3>
            <h3><img className="walnut_laundry" src={ WalnutLaundry } /></h3>
            <h3><img className="walnut_internet" src={ WalnutInternet } /></h3>
            <h3><img className="walnut_backyard" src={ WalnutBackyard } /></h3>

            <h2>Vine Street</h2>

            <img className="vine_front" src={ VineFront } />
            <img className="vine_kitchen1" src={ VineKitchen1 } />
            <img className="vine_kitchen2" src={ VineKitchen2 } />
            <img className="vine_living1" src={ VineLiving1 } />
            <img className="vine_living2" src={ VineLiving2 } />
            <img className="vine_living3" src={ VineLiving3 } />
            <img className="vine_master1" src={ VineMaster1 } />
            <img className="vine_master2" src={ VineMaster2 } />
            <img className="vine_master3" src={ VineMaster3 } />
            <img className="vine_twin1" src={ VineTwin1 } />
            <img className="vine_twin2" src={ VineTwin2 } />
            <img className="vine_queen1" src={ VineQueen1 } />
            <img className="vine_queen2" src={ VineQueen2 } />
            <img className="vine_queen3" src={ VineQueen3 } />
            <img className="vine_closets" src={ VineClosets } />
            <img className="vine_bathroom1" src={ VineBathroom1 } />
            <img className="vine_bathroom2" src={ VineBathroom2 } />
            <img className="vine_bathroom3" src={ VineBathroom3 } />
            <img className="vine_bathroom4" src={ VineBathroom4 } />
            <img className="vine_bathroom5" src={ VineBathroom5 } />
            <img className="vine_locks" src={ VineLocks } />
            <img className="vine_camera" src={ VineCamera } />
            <img className="vine_front_lock" src={ VineFrontLock } />

            <h2>Efficiency</h2>

            <img className="eff_living1" src={ EffLiving1 } />
            <img className="eff_living2" src={ EffLiving2 } />
            <img className="eff_living3" src={ EffLiving3 } />
            <img className="eff_loft" src={ EffLoft } />
            <img className="eff_bathroom" src={ EffBathroom } />
            <img className="eff_kitchen" src={ EffKitchen } />
            <img className="eff_fridge" src={ EffFridge } />
            <img className="eff_washer" src={ EffWasher } />

            <h2>39th Street</h2>

            <img className="front_39" src={ Front39 } />
            <img className="head_39" src={ Head39 } />
            <img className="living1_39" src={ Living139 } />
            <img className="living2_39" src={ Living239 } />
            <img className="living3_39" src={ Living339 } />
            <img className="dining_39" src={ Dining39 } />
            <img className="washer_39" src={ Washer39 } />
            <img className="kitchen1_39" src={ Kitchen139 } />
            <img className="kitchen2_39" src={ Kitchen239 } />
            <img className="kitchen3_39" src={ Kitchen339 } />
            <img className="queen1_39" src={ Queen139 } />
            <img className="queen2_39" src={ Queen239 } />
            <img className="queen3_39" src={ Queen339 } />
            <img className="king1_39" src={ King139 } />
            <img className="king2_39" src={ King239 } />
            <img className="twin1_39" src={ Twin139 } />
            <img className="twin2_39" src={ Twin239 } />
            <img className="bathroom1_39" src={ Bathroom139 } />
            <img className="bathroom2_39" src={ Bathroom239 } />
            <img className="porch_39" src={ Porch39 } />
            <img className="backyard_39" src={ Backyard39 } />
            <img className="bathroom3_39" src={ Bathroom339 } />

        </div>



    )
}

export default PropertyListing
