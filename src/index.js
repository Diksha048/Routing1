import ReactDom from 'react-dom/client';

import Home  from "./view/home/home"
import Contact from './view/contact/contact';
import Order from './view/order/order';

const root = ReactDom.createRoot(document.getElementById('root'));

const CurrentPath = window.location.pathname;
if(CurrentPath == '/'){
    root.render(<Home/>)
}
else if(CurrentPath == '/contact'){
    root.render(<Contact/>)
}
else if (CurrentPath == '/order'){
    root.render(<Order/>)
}
else{
    root.render(<h1>404 Page Not Found</h1>)
}
