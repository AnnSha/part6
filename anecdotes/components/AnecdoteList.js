import{ useDispatch, useSelector } from 'react-redux';
import { addVote} from "../reducers/anecdoteReducer";
import {createNotification} from "../reducers/notificationReducer";
// import {updateVote} from "../reducers/anecdoteReducer";



const AnecdoteList = () => {

    const dispatch = useDispatch();
    const anecdotes = useSelector((state) => state.anecdotes);
    const filter = useSelector((state) => state.filter);

    const filteredAnecdotes = anecdotes.filter((a) =>
        a.content.toLowerCase().includes(filter.toLowerCase())
    );

    const vote = (id) => {
        const anecdote = anecdotes.find((a) => a.id === id);
        dispatch(addVote(id));
        // dispatch(updateVote(id));
        dispatch(createNotification(`Voted for '${anecdote.content}'`));
    };
    const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes);

    return (
        <ul>
            <h2>Anecdotes</h2>
            {sortedAnecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
        </ul>
    );
};

export default AnecdoteList;
