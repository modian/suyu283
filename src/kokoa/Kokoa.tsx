import { Route, Routes } from 'react-router-dom';
import Index from 'kokoa/Index';
import 'kokoa/css/styles.css';
import Friends from 'kokoa/Friends';
import Chats from 'kokoa/Chats';
import Chat from 'kokoa/Chat';
import Find from 'kokoa/Find';
import More from 'kokoa/More';
import Settings from 'kokoa/Settings';

function Kokoa() {

  return (
    <>
      <div className='kokoa-body'>
        <Routes>
          <Route index element={<Index />} />
          <Route path='' element={<Index />} />
          <Route path='friends' element={<Friends />} />
          <Route path='chats' element={<Chats />} />
          <Route path='chat' element={<Chat />} />
          <Route path='find' element={<Find />} />
          <Route path='more' element={<More />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </div>
    </>
  );
};

export default Kokoa;