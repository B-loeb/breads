const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        {/* this is a JSX comment*/}
       {/* <p>I have {breads[0].name} bread!</p> */}
        <ul>
        {
            breads.map((bread, index) =>{
                return (<li key={index}>
                <a href={`/breads/${index}`}>
                    {bread.name}
                </a>
                </li>
                )
            })
        }
        </ul>
        //BUTTON FOR NEW
    <div className="newButton">
       <a href="/breads/new"><button>Add a new bread</button></a>
    </div>
//Back Button
    <div className="backButton">
        <a href="/breads"><button>Go back to the index</button></a>
    </div>
      </Default>
    )
}




module.exports = Index
