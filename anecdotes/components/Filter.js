import { filterChange } from '../reducers/filterReducer'
import {useDispatch} from "react-redux";

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        // const filterValue = event.target.value;
        dispatch(filterChange(event.target.value));
    };
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            <p>filter :</p>
            <input type='search'
                   placeholder='search...'
                   name="filter"
                   onChange={handleChange}
            />

        </div>
    )
}

export default Filter
