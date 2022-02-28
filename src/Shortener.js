import {useState} from 'react';

const Shortener = () => {
    const [longUrl, setLongUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState(false);
    const [inProgress, setInProgress] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
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
                    return Promise.reject(error);
                }

                setShortUrl(data.short_url)
                setError(false);
            })
            .catch(error => {
                setError(true);
                console.error(error);
            })
            .finally(() => setInProgress(false));
    }

    const handleChange = e => setLongUrl(e.target.value);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input style={{ width: '80%' }} onChange={handleChange} value={longUrl} type="text" name="longUrl" id="longUrl" />
                <br/><input type="submit" value="Shorten" disabled={inProgress}/>
            </form>
            { shortUrl && <p>Your short url: <a target="_blank" rel="noreferrer" href={shortUrl}>{shortUrl}</a></p>}
            { error && <p>Something went wrong! Please try again.</p> }
        </div>
    );
}

export default Shortener;
