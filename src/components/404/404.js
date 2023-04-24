import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <Card className="text-center">

            <Card.Body>
                <Card.Title>404</Card.Title>
                <Card.Title>Page Not Found</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button as={Link} to="/">Back to Home Page</Button>
            </Card.Body>

        </Card>
    );
}

export default ErrorPage;