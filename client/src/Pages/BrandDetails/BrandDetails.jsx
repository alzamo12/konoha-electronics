import { useParams } from "react-router";

const BrandDetails = () => {
    const {brand} = useParams();
    return (
        <div>
            <h2 className="card-title">Welcome to {brand} products</h2>
        </div>
    );
};

export default BrandDetails;