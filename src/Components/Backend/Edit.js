import { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { withSelect } from "@wordpress/data";
import { useBlockProps } from '@wordpress/block-editor';
import { tabController } from '../../../../bpl-tools/utils/functions';
import Settings from './Settings/Settings';
import Style from '../Common/Style';
import PrintPage from '../Common/PrintPage';
import PrintButtonText from './PrintButtonText';
import ShortCode from './ShortCode/ShortCode';


const Edit = props => {
	const { attributes, setAttributes, clientId, isSelected, currentPostId, CPTType } = props;

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]);

	useEffect(() => tabController(), [isSelected]);

	const isPremium = false;

	const shortcode = `[print_page id=${currentPostId}]`;

	const id = `ppbPrintPage-${clientId}`;


	return <>
		<Settings {...{ attributes, setAttributes, isPremium }} />

		{CPTType === "print_page" && <ShortCode {...{ shortcode }} />}

		<div {...useBlockProps({ className: 'noPrint', draggable: false })} id={id}>

			<Style {...{ attributes, id }} />

			<PrintPage {...{ attributes, setAttributes, PrintButtonText, isBackend: true }} />

		</div>
	</>;
};


export default withSelect((select) => {
	const currentPostId = select('core/editor').getCurrentPostId();
	const CPTType = select('core/editor').getCurrentPostType?.();

	return {
		currentPostId,
		CPTType
	};
})(Edit);