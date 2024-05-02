import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate()

    return (
        <>
            <button onClick={() => navigate('/normalstyling')}>Normal Styling</button>
            <button onClick={() => navigate('/moduledstyling')}>Moduled Styling</button>
        </>

    )
}