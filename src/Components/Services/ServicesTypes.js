import TypesData from "../../Data/TypesData";

export default function ServicesTypes() {
    const types = TypesData.map(data => (
        <div className="services-type" key={data.id}>
            <h2 className="services-types-heading">{data.heading}</h2>
            <p className="services-types-para">{data.para}</p>
            <ul className="services-types-list">
                {data.items.map((item, index) => (
                    <li className="list-item" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    ));
    return(
        <div className="services-type-main">
            {types}
        </div>
    )
}