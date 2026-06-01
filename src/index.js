import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { printIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: printIcon(),
	edit: Edit,
	save: () => null
});