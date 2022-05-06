import { useState } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

const Nav = () => {
	return (
		<Menu size='massive'>
			<Menu.Item name='Today' href='/' />
			<Dropdown item text='My Recipe'>
				<Dropdown.Menu>
					<Dropdown.Item icon='edit' text='Edit Profile' />
					<Dropdown.Item icon='globe' text='Choose Language' />
					<Dropdown.Item icon='settings' text='Account Settings' />
				</Dropdown.Menu>
			</Dropdown>

			<Menu.Menu position='right'>
				<Dropdown item text='Account'>
					<Dropdown.Menu>
						<Dropdown.Item icon='edit' text='Edit Profile' />
						<Dropdown.Item icon='globe' text='Choose Language' />
						<Dropdown.Item icon='settings' text='Account Settings' />
					</Dropdown.Menu>
				</Dropdown>
				<Menu.Item>
					<Button secondary>Log in</Button>
				</Menu.Item>
				<Menu.Item>
					<Button primary>Sign Up</Button>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

export default Nav;
