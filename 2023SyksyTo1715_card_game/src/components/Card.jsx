
export default function Card({card}){
    return(
       <div className="card">
            <img src={card.image}/>
            <ul className="stat-list">
                {card.stats.map(stat =>(
                    <li className="stat-list-item">
                        <span>{stat.name}</span>
                        <span>{stat.value}</span>
                    </li> 
                ))}
            </ul>
       </div>
    );
}