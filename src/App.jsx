import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';

import { Home } from './Home';
import { Carrer } from './Carrer';
import { Course } from './Course';
import { Service } from './Service';
import { About } from './About';
import { Cookie } from './support/Cookie';
import { Privatepolicy } from './support/Privatepolicy';
import { Terms } from './support/Terms';

// home (explore) pages
import { Explore1 } from './explore/Explore1';
import { Explore2 } from './explore/Explore2';
import { Explore3 } from './explore/Explore3';
import { Explore4 } from './explore/Explore4';
import { Explore5 } from './explore/Explore5';

// carrer (jobs) pages
import { Graphic } from './jobs/Graphic';
import {Aws} from './jobs/Aws'
import {Sales} from './jobs/Sales'
import {Ecommerce} from './jobs/Ecommerce'
import {Fashion} from './jobs/Fashion'
import {Iot} from './jobs/Iot'
import {Product} from './jobs/Product'
import {MotionDesign} from './jobs/MotionDesign'
import {IEEE} from './jobs/IEEE'
import {Instructor} from './jobs/Instructor'
import {Food} from './jobs/Food'
import {Content} from './jobs/Content'


// home layout
import { Header } from './components/Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="explore1" element={<Explore1 />} />
      <Route path="explore2" element={<Explore2 />} />
      <Route path="explore3" element={<Explore3 />} />
      <Route path="explore4" element={<Explore4 />} />
      <Route path="explore5" element={<Explore5 />} />

      <Route path="carrer" element={<Carrer />}/>
    <Route path="graphic" element={<Graphic />} />
      <Route path="aws" element={<Aws />} />
      <Route path="sales" element={<Sales/>} />
      <Route path="ecommerce" element={< Ecommerce/>} />
      <Route path="fashion" element={< Fashion/>} />
      <Route path="iot" element={< Iot/>} />
      <Route path="product" element={< Product/>} />
      <Route path="motiondesign" element={< MotionDesign/>} />
      <Route path="ieee" element={< IEEE/>} />
      <Route path="instructor" element={< Instructor/>} />
      <Route path="food" element={< Food/>} />
      <Route path="content" element={< Content/>} />


      <Route path="courses" element={<Course />} />
      <Route path="service" element={<Service />} />
      
      <Route path="about" element={<About/>} />
      
      <Route path="private" element={<Privatepolicy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="cookie" element={<Cookie />} />
    </Route>

  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
