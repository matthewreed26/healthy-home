import { useState, useContext, useEffect } from 'react';
import AppContext from '../app/AppContext';
import { Essentials } from '@/common/domain/essential/Essentials';
import { Essential } from '@/common/domain/essential/Essential';

const EssentialsView = () => {
  const { essentials } = useContext(AppContext);
  const [essentialsList, setEssentialsList] = useState<Essential[]>([]);
  const [addEssential, setAddEssential] = useState<Essential>({ code: '', type: '' });

  useEffect(() => {
    (async () => {
      setEssentialsList(await (essentials as () => Essentials)().list());
    })();
  }, []);

  const clickedAddEssentialButton = async () => {
    if (addEssential.code && !essentialsList.find(e => e.code === addEssential.code)) {
      try {
        await (essentials as () => Essentials)().add(addEssential);
        setEssentialsList([...essentialsList, addEssential]);
        setAddEssential({ code: '', type: '' });
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (!essentialsList.length) {
    return <div data-testid="loading">Loading...</div>;
  }
  return (
    <div data-testid="essentials-list">
      {essentialsList.map(essential => (
        <div key={essential.code}>
          <b>Essential:</b> <span data-testid={'essential-' + essential.code}>{essential.type}</span>
        </div>
      ))}
      <label htmlFor="essential-add">+ Essential:</label>
      <input
        id="essential-add"
        type="text"
        onChange={e => setAddEssential({ type: e.target.value, code: e.target.value.replace(/\s+/g, '-').toLowerCase() })}
        value={addEssential.type}
        data-testid="add-essential"
      ></input>
      <button onClick={clickedAddEssentialButton} data-testid="add-essential-button">
        Add
      </button>
    </div>
  );
};
export default EssentialsView;
