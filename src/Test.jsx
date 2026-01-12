import Data from '../data.json'
  
export default function Test() {
    return (
        <div>
      {Data.markets.map((market) => (
        <div key={market.id}>
          <h3>{market.title}</h3>
          <p>Category: {market.category}</p>
          <p>Status: {market.status}</p>
        </div>
      ))}
    </div>
    )

}