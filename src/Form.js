import {useState} from 'react';

const Form = () => {
    const [longUrl, setLongUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(longUrl);
    }

    const handleChange = (e) => setLongUrl(e.target.value);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={longUrl} type="text" name="longUrl" id="longUrl" />
                <input type="submit" value="Shorten" />
            </form>
            <p>Your short url: <a href="https://short.kellenanker.com/foo">short.kellenanker.com/foo</a></p>
        </div>
    );
}

export default Form;
