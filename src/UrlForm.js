import {useState} from 'react';

const UrlForm = () => {
    const [longUrl, setLongUrl] = useState('https://www.google.com/search?q=really+long+google+search');
    const [shortUrlId, setShortUrlId] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://short.kellenanker.com/shorten?longUrl=${longUrl}`)
            .then(data => {
                console.log(data.json());
                setShortUrlId(data.id);
                setSuccess(true);
            }).catch((error) => {
                console.error('Error:', error);
                setError(true)
            });
    }

    const handleChange = (e) => setLongUrl(e.target.value);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={longUrl} type="text" name="longUrl" id="longUrl" />
                <input type="submit" value="Shorten" />
            </form>
            {success &&
                <p>Your short url: <a href={`https://short.kellenanker.com/s/${shortUrlId}`}>{`https://short.kellenanker.com/s/${shortUrlId}`}</a></p>
            }
            {error &&
                <p>There was an error processing your request.</p>
            }
        </div>
    );
}

export default UrlForm;
