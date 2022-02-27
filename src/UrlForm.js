import {useState} from 'react';

const UrlForm = () => {
    const [longUrl, setLongUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    const [shortUrl, setShortUrl] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [inProgress, setInProgress] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);
        setInProgress(true);

        fetch('https://kell.link', {
            method: 'POST',
            body: JSON.stringify({longUrl})
        })
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    setError(true);
                    return Promise.reject(error);
                }

                console.log(data);
                setShortUrl(data.short_url)
                setSuccess(true);
                setError(false);
            })
            .catch(error => {
                setSuccess(false);
                setError(true);
                console.error('Error', error);
            })
            .finally(() => { setInProgress(false); });
    }

    const handleChange = (e) => setLongUrl(e.target.value);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input style={{ width: '80%' }} onChange={handleChange} value={longUrl} type="text" name="longUrl" id="longUrl" />
                <br/>
                <input type="submit" value="Shorten" />
            </form>
            { inProgress && <p>Working...</p> }
            { success && <p>Your short url: <a target="_blank" rel="noreferrer" href={shortUrl}>{shortUrl}</a></p> }
            { error && <p>There was an error processing your request.</p> }
        </div>
    );
}

export default UrlForm;
