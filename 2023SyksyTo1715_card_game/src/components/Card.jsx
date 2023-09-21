
export default function Card(){
    return(
       <div className="card">
            <img src="http://placekitten.com/120/100"/>
            <ul className="stat-list">
                <li className="stat-list-item">
                    <span>Cuteness</span>
                    <span>10</span>
                </li> 
            </ul>
       </div>
    );
}