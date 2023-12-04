import { useSelector, useDispatch } from 'react-redux';

export function Color(){
    
    const dispatch = useDispatch();
    const clr = useSelector()
    return(
        <div>
            <button onClick={()=> dispatch() }>Red</button>

        </div>

    );
}