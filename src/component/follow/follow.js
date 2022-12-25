import './follow.css'
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

function Follow() {
  return (
    <>
        <div className='container text-center'>
           <h1 > <NoAccountsIcon className='icon'/></h1>
            <h3 className='m-2'>Build your new following feed</h3>
            <p className='m-2'>Follow some Spaces to start discovering stories in your feed.</p>
        </div>
    </>
  )
}

export default Follow