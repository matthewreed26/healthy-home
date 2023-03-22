import { useState, useContext, useEffect } from 'react';
import AppContext from '../app/AppContext';
import { Essentials } from '@/common/domain/essential/Essentials';
import { Essential } from '@/common/domain/essential/Essential';

const EssentialsView = () => {
  const { essentials } = useContext(AppContext);
  const [essentialsList, setEssentialsList] = useState<Essential[]>([]);

  useEffect(() => {
    (async () => {
      setEssentialsList(await (essentials as () => Essentials)().list());
    })();
  }, []);

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
    </div>
  );
};
export default EssentialsView;
