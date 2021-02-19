import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//https://fkhadra.github.io/react-toastify/

toast.configure({
    position: "bottom-center",
    autoClose: 1500,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: false,
    limit:1,
    pauseOnFocusLoss:false,
    
})

export default toast
