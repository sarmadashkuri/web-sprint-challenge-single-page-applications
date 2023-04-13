import { useNavigate } from "react-router-dom";
export default function Home() {

    const navigate = useNavigate();
    const routeToForm = () => {
        navigate('/pizza')
    }

    return (
        <div className="home-wrapper">
            <button onClick={routeToForm} id="order-pizza">
                Start your order!
            </button>
        </div>
    )









}