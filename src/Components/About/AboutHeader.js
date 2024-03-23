import about from '../../Images/about.jpeg';

export default function AboutHeader() {
    return (
        <div>
            <img src={about} className='book-header-image'/>
            <h1 className="servives-heading">About Us</h1>
        </div>
    )
}