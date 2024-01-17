import Dropdown from 'react-bootstrap/Dropdown';

function AccountDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='transparent' id="dropdown-basic" className='no-border'>
        <img src="../src/assets/avatar.png" alt="avatar" width={25} />
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-end me-1'>
        <Dropdown.Item href="#/action-1">Manage Profiles</Dropdown.Item>
        <Dropdown.Item href="/account">Account</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Help Center</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Signout Netflix</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AccountDropdown;