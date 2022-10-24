import { useSelector, useDispatch }from 'react-redux';

function Header( props ) {
    const state = useSelector( state => state );
    const dispatch = useDispatch();
    return (
    <div className="App-header">
        <h1 className="Headline">Longfall</h1>
        <h2>Groovy Alt-Pop from the Twin Cities</h2>
    </div>
    );
}

export default Header;