import { Link } from 'react-router-dom';
import { Avatar } from './BlogCard';

export function Appbar() {
  return (
    <div className="flex justify-between px-20 border-b h-15 mt-2 ">
      <div className="flex justify-center items-center gap-x-3">
        <Link to={'/blogs'}><div className='text-base font-semibold'>Medium</div></Link>
      </div>
      <div className="flex justify-center items-center">
        <Link to={'/publish'}><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mx-4">New Blog</button></Link>
        <Avatar name='suchith' size='big'></Avatar>
      </div>
      

    </div>
  );
}
