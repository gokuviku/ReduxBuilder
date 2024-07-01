import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, del, edit } from './components/Redux/Action';

function App() {
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(edit(currentIndex, input));
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      dispatch(add(input));
    }
    setInput('');
  };

  const handleDelete = (index) => {
    dispatch(del(index));
  };

  const handleEdit = (index) => {
    setInput(myState[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter TODO"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myState.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>
                <button onClick={() => handleEdit(index)}>EDIT</button>
                <button onClick={() => handleDelete(index)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
