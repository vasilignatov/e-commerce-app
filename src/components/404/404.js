import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ErrorPage = ({ error }) => {

    return (
        <Card className="text-center">

            <Card.Body>

                <Card.Title>
                    {
                        error
                            ? error.statusCode
                            : '404'
                    }
                </Card.Title>

                <Card.Title>
                    {
                        error
                            ? error.message
                            : 'Page Not Found'
                    }
                </Card.Title>

                <Button as={Link} to="/">Back to Home Page</Button>

            </Card.Body>

        </Card>
    );
}

export default ErrorPage;